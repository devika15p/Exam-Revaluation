const express = require('express');
const router = express.Router();
const controller = require('./controllar');
const authmiddleware = require('./authmiddleware');

// Route to register a user
router.post('/registration',  controller.register);

//Route to login a user
router.post("/login" , controller.login);

// Route to register a admin
router.post('/adminregistration ',  controller.adminregister)
 
// Route to login a admin
router.post("/adminlogin" , controller.adminlogin)


module.exports = router;