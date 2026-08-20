const mongoose = require("mongoose");


// Appointment Schema
const appointmentSchema = new mongoose.Schema({

    // Reference to Patient
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient"
    },

    // Reference to Doctor
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
    },

    // Appointment date is required
    date: {
        type: Date,
        required: true
    },

    // Time slot is required
    timeSlot: {
        type: String,
        required: true
    },

    // Status can only have these three values
    status: {
        type: String,

        enum: [
            "pending",
            "confirmed",
            "cancelled"
        ],

        // Default status
        default: "pending"
    },

    // Maximum 300 characters
    reason: {
        type: String,
        maxlength: 300
    }

});


// Export model
module.exports = mongoose.model("Appointment", appointmentSchema);