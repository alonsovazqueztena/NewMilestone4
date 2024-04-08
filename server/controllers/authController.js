const User = require('../models/user'); // Import User model to interact with the database
const { hashPassword, comparePassword } = require('../helpers/auth') // Import password handling utilities
const jwt = require('jsonwebtoken'); // Import JSON Web Token library for authentication

// Test endpoint function
const test = (req, res) => {
    res.json('test is working') // Send a test response
};

// Function to register a new user
const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body; // Extract name, email, and password from request body

        // Validate name
        if(!name) {
            return res.json({
                error: 'Name is required'
            });
        }
        // Validate password length
        if(!password || password.length < 6) {
            return res.json({
                error: 'Password is required and should be at least 6 characters long'
            });
        }
        // Check if email already exists in the database
        const exist = await User.findOne({email});
        if(exist) {
            return res.json({
                error: 'Email is taken already'
            });
        }

        const hashedPassword = await hashPassword(password); // Hash the password
        // Create a new user in the database with the hashed password
        const user = await User.create({
            name,
            email, 
            password: hashedPassword,
        });

        return res.json(user); // Return the newly created user
    } catch (error) {
        console.log(error); // Log any errors
    }
};

// Function to log in a user
const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body; // Extract email and password from request body

        // Check if user exists
        const user = await User.findOne({email});
        if(!user) {
            return res.json({
                error: 'No user found'
            });
        }

        // Check if the submitted password matches the stored one
        const match = await comparePassword(password, user.password);
        if(match) {
            // Generate a JWT if the password matches
            jwt.sign({email: user.email, id: user._id, name: user.name}, process.env.JWT_SECRET, {}, (err, token) => {
                if(err) throw err;
                res.cookie('token', token).json(user); // Send the token in a cookie and user data in response
            });
        } else {
            res.json({
                error:"Passwords do not match."
            });
        }
    } catch (error) {
        console.log(error); // Log any errors
    }
};

// Function to get the user profile from the JWT
const getProfile = (req, res) => {
    const {token} = req.cookies; // Extract token from cookies
    if(token) {
        // Verify the token and extract user data
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if(err) throw err;
            res.json(user); // Return the user data
        });
    } else {
        res.json(null); // Return null if no token found
    }
};

// Export the functions to be used in other parts of the application
module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile
};
