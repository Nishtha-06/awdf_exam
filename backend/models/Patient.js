const mongoose = require("mongoose");


// Patient Schema
const patientSchema = new mongoose.Schema({

    // Patient name is required
    name: {
        type: String,
        required: true
    },

    // Email is required and unique
    email: {
        type: String,
        required: true,
        unique: true
    },

    // Phone is optional
    phone: {
        type: String
    },

    // Blood group must be one of these values
    bloodGroup: {
        type: String,

        enum: [
            "A+",
            "A-",
            "B+",
            "B-",
            "AB+",
            "AB-",
            "O+",
            "O-"
        ]
    },

    // Age is a number
    age: {
        type: Number
    }

});


// Export model
module.exports = mongoose.model("Patient", patientSchema);