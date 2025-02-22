// const express = require('express');
// const router = express.Router();
// const controller = require('./controllar');
// const authmiddleware = require('./authmiddleware');

// // Route to register a user
// router.post('/registration',  controller.register);

// //Route to login a user
// router.post("/login" , controller.login);

// // Route to register a admin
// router.post('/adminregistration ',  controller.adminregister)
 
// // Route to login a admin
// router.post("/adminlogin" , controller.adminlogin)


// module.exports = router;

const express = require("express");
const router = express.Router();
const allController = require("./controllar"); // Import the controller

// User routes
router.post("/register", allController.register);
router.post("/login", allController.login);

// Admin routes
router.post("/adminregister", allController.adminregister);
router.post("/adminlogin", allController.adminlogin);

//Requestform route
router.post("/requestform", allController.requestform)

// teacking login
router.post("/trackinglogin", allController.trackinglogin)

// get student registration
router.get("/getregistration", allController.getregistration)

//get student request
router.get("/getrequest" ,allController.getrequest)

module.exports = router;
