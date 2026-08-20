
const mongoose = require("mongoose");


// Doctor Schema
const doctorSchema = new mongoose.Schema({

    // Doctor name is required
    name: {
        type: String,
        required: true
    },

    // Email
    email: {
        type: String
    },

    // Specialisation is required
    specialisation: {
        type: String,
        required: true
    },

    // Default value is true
    available: {
        type: Boolean,
        default: true
    }

});


// Export model
module.exports = mongoose.model("Doctor", doctorSchema);