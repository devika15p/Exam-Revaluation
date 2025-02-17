const express = require('express');
const router = express.Router();
const registerController = require('./controllar');
const authmiddleware = require('./authmiddleware');

// Route to register a user
router.post('/registration',  registerController.register);

//Route to login a user
router.post("/login" , registerController.login);


module.exports = router;