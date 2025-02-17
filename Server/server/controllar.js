const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Register = require('./model');
require("dotenv").config();

exports.register = async (req, res) => {
    console.log("Received Data:", req.body); // Debugging

    const { username, email, password, college, branch } = req.body;

    if (!username || !email || !password || !college || !branch) {
        return res.status(400).json({ msg: 'All fields are required' });
    }

    try {
        let register = await Register.findOne({ email });
        if (register) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        register = new Register({
            username,
            email,
            password: hashedPassword,
            college,
            branch
        });

        await register.save();

        res.json({ register });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};



exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists
        let register = await Register.findOne({ email });
        if (!register) {
            return res.status(400).json({ msg: 'Invalid Email' });
        }

        // Check if the password matches
        const isMatch = await bcrypt.compare(password, register.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid Password' });
        }

        // Generate a JWT token

        const token = jwt.sign(
            { registerId: register._id },
            process.env.JWT_SECRET, // Add a JWT_SECRET to your environment variables
            { expiresIn: '1h' }
        );

        // Respond with the token
        // res.json({ token });
        res.status(200).json({ msg: "loggedin successfull", token })
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};