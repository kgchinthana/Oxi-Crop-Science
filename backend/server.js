require('dotenv').config();

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authentication = require('./routes/authRoutes');
const errorHandler = require('./middleware/error');
const e = require('express');

// express app
const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Error Handler(should be last piece of middleware)
app.use(errorHandler);

// routes

app.use('/api/authentication', authentication);

// connect to db
const database = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});


database.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    // listen for requests
    const server = app.listen(process.env.PORT, () => {
      console.log('Connected to db & listening on port 4000!!!');
    });
  }
});
