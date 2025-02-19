// const mongoose = require("mongoose")

// const registrationSchema = mongoose.Schema(
//     {
//         username : String,
//         email: String,
//         password: String,
//         college : String,
//         branch : String

//     }
// )

// const Register = mongoose.model('register', registrationSchema)


// const adminSchema = mongoose.Schema({
//     name : String,
//     email : String,
//     password : String
// })

// const Admin = mongoose.model('admin', adminSchema)

// module.exports = {Register , Admin}

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

const Register = mongoose.model("Register", RegisterSchema);
const Admin = mongoose.model("Admin", AdminSchema);

module.exports = { Register, Admin };
