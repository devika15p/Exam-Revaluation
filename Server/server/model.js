const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    college: String,
    branch: String
});

const AdminSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const RequestSchema = new mongoose.Schema({
    name : String,
    email : String,
    mobile : Number,
    college : String,
    branch : String,
    subject : String,
    reason : String
})


const Register = mongoose.model("Register", RegisterSchema);
const Admin = mongoose.model("Admin", AdminSchema);
const Request = mongoose.model("Request", RequestSchema);


module.exports = { Register, Admin , Request };
