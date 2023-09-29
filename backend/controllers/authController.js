const mysql = require("mysql2");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { promisify } = require("util");
const { error } = require("console");
const e = require("express");

const database = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({error: "Please Provide an email and password"});
        }
        database.query('SELECT * FROM Customer WHERE Email = ?', [email], async (err, results) => {
            if (!results || !await bcrypt.compare(password, results[0].Password)) {
                res.status(401).json({error:'Email or Password is incorrect'});
            } else {
                const id = results[0].CustomerID;

                const token = jwt.sign({ id }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRE
                });

                console.log("the token is " + token);

                const cookieOptions = {
                    expires: new Date(
                        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
                    ),
                    httpOnly: true
                }
                res.cookie('userSave', token, cookieOptions);
                res.status(200).json({ message: 'User logged in successfully' });
            }
        })
    } catch (err) {
        console.log(err);
    }
}
exports.register = (req, res) => {
    const { name, contact, address, email, password, passwordConfirm } = req.body;
    database.query('SELECT Email from Customer WHERE Email = ?', [email], async (err, results) => {
        if (err) {
            console.log(err);
        } else {
            if (results.length > 0) {
              return res.status(401).json({ error: 'Customer already exist' });
            } else if (password != passwordConfirm) {
                
                return res.status(401).json({ error: 'Password do not match'  });             
            }
        }

        let hashedPassword = await bcrypt.hash(password, 8);

        database.query('INSERT INTO Customer SET ?', { CustomerName: name, CustomerContact: contact, Address: address, Email: email, Password: hashedPassword }, (err, results) => {
            if (err) {
                console.log(err);
            } else {
              res.status(201).json({ message: 'Customer created successfully' });
            }
        })
    })
}

exports.isLoggedIn = async (req, res, next) => {
    if (req.cookies.userSave) {
        try {
            // 1. Verify the token
            const decoded = await promisify(jwt.verify)(req.cookies.userSave,
                process.env.JWT_SECRET
            );
            console.log(decoded);

            // 2. Check if the user still exist
            database.query('SELECT * FROM Customer WHERE CustomerID = ?', [decoded.id], (err, results) => {
                console.log(results);
                if (!results) {
                    return next();
                }
                req.user = results[0];
                return next();
            });
        } catch (err) {
            console.log(err)
            return next();
        }
    } else {
        next();
    }
}
exports.logout = (req, res) => {
    res.cookie('userSave', 'logout', {
        expires: new Date(Date.now() + 2 * 1000),
        httpOnly: true
    });
    res.status(200).redirect("/login");
}


exports.forgotpassword = async (req, res, next) => {
  console.log("forgotpassword");
}

exports.resetpassword = async (req, res, next) => {
  console.log("resetpassword");
}