const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Register, Admin, Request } = require('./model');
require("dotenv").config();

// student registration
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


// student login
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

// admin registration 
exports.adminregister = async (req, res) => {
    console.log("Received Data:", req.body); // Debugging

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ msg: "All fields are required" });
    }

    try {
        let admin = await Admin.findOne({ email });
        if (admin) {
            return res.status(400).json({ msg: "Admin already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        admin = new Admin({
            name,
            email,
            password: hashedPassword
        });

        await admin.save();

        res.json({ admin });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ msg: "Server Error" });
    }
};

// admin login
exports.adminlogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        let admin = await Admin.findOne({ email })
        if (!admin) {
            return res.status(400).json({ msg: "invaild email" })
        }

        const isMatch = await bcrypt.compare(password, admin.password)
        if (!isMatch) {
            return res.status(400).json({ msg: "invalid password" })
        }

        const token = jwt.sign(
            { adminID: admin._id },
            process.env.JWT_SECRET,
            { expiresIn: "2h" }
        );

        res.status(200).json({ msg: "loggedin successfull", token })
    }

    catch (error) {
        console.error(error.message);
        res.status(500).send('server error');
    }
}

// Requestform for revaluation
exports.requestform = async (req, res) => {
    const { name, email, mobile, college, branch, subject, reason } = req.body;

    try {
        const requestform = new Request({ name, email, mobile, college, branch, subject, reason })
        const data = await requestform.save()

        res.send(data)
    }

    catch (error) {
        res.send(error)
    }
}

// tracking request login
exports.trackinglogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists
        let trackinglogin = await Register.findOne({ email });
        if (!trackinglogin) {
            return res.status(400).json({ msg: 'Invalid Email' });
        }

        // Check if the password matches
        const isMatch = await bcrypt.compare(password, trackinglogin.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid Password' });
        }

        // Generate a JWT token

        const token = jwt.sign(
            { trackinhloginId: trackinglogin._id },
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

// get student registration
exports.getregistration = async (req, res) => {
    try {
        const student = await Register.find()

        if (!student.length) {
            return res.status(400).json({ msg: "no student found" });
        }
        res.json(student)
    }
    catch (error) {
        console.error(error.message)
        res.status(500).send('server error')
    }
};

// get student request 
exports.getrequest = async (req, res) => {
    try {
        const request = await Request.find()

        if (!request.length) {
            return res.status(400).json({ msg: "no request found" })
        }
        res.json(request)
    }
    catch (error) {
        console.error(error.message)
        res.status(500).send('server error')
    }
    
}