// Import the mongoose library to interact with MongoDB
const mongoose = require('mongoose');
// Destructure Schema from mongoose to define the structure of the database documents
const { Schema } = mongoose;

// Define the schema for a user, which is like a blueprint for the data
const userSchema = new Schema({
    name: String, // Defines a 'name' field of type String
    email: {
        type: String, // Defines an 'email' field of type String
        unique: true // Ensures that each email in the database is unique
    },
    password: String // Defines a 'password' field of type String
});

// Create a model from the schema
// 'User' is the name of the model, and userSchema is the schema the model will use
const userModel = mongoose.model('User', userSchema);

// Export the model to use it in other parts of the application
module.exports = userModel;
