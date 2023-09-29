const express = require("express");
const router = express.Router();


const {
    register,
    login,
    logout,
    isLoggedIn,
    forgotpassword,
    resetpassword,
} = require("../controllers/authController");


router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/isLoggedIn").get(isLoggedIn);
router.route("/forgotpassword").post(forgotpassword);
router.route("/resetpassword/:resetToken").put(resetpassword);

module.exports = router;