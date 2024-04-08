// Import the bcrypt library for hashing and comparing passwords
const bcrypt = require('bcrypt');

// Function to hash a password
const hashPassword = (password) => {
    // Return a new promise
    return new Promise((resolve, reject) => {
        // Generate a salt with a cost factor of 12
        bcrypt.genSalt(12, (err, salt) => {
            if(err) {
                reject(err); // Reject the promise if there's an error generating the salt
            }
            // Hash the password using the generated salt
            bcrypt.hash(password, salt, (err, hash) => {
                if(err) {
                    reject(err); // Reject the promise if there's an error hashing the password
                }
                resolve(hash); // Resolve the promise with the hashed password
            });
        });
    });
};

// Function to compare a plaintext password with a hashed password
const comparePassword = (password, hashed) => {
    // Return the result of the bcrypt comparison
    return bcrypt.compare(password, hashed);
};

// Export the functions to be used in other parts of the application
module.exports = {
    hashPassword,
    comparePassword
};
