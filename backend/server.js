const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Import models
const Patient = require("./models/Patient");
const Doctor = require("./models/Doctor");
const Appointment = require("./models/Appointment");


dotenv.config();

const app = express();


app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {

    console.log("MongoDB connected successfully");

    // Start server after MongoDB connection
    app.listen(5000, () => {
      console.log("Server running on http://localhost:5000");
    });

  })
  .catch((error) => {

    console.log("MongoDB connection failed");
    console.log(error.message);

  });

app.post("/patients", async (req, res) => {

  try {

    // Create patient
    const patient = new Patient(req.body);

    // Save patient to MongoDB
    const savedPatient = await patient.save();

    // Send response
    res.status(201).json({
      success: true,
      message: "Patient created successfully",
      data: savedPatient
    });

  } catch (error) {

    // Meaningful validation error
    res.status(400).json({
      success: false,
      message: "Patient validation failed",
      error: error.message
    });

  }

});


app.post("/doctors", async (req, res) => {

  try {

    const doctor = new Doctor(req.body);


    const savedDoctor = await doctor.save();

    res.status(201).json({
      success: true,
      message: "Doctor created successfully",
      data: savedDoctor
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: "Doctor validation failed",
      error: error.message
    });

  }

});


app.post("/appointments", async (req, res) => {

  try {

    // Create appointment
    const appointment = new Appointment(req.body);

    // Save appointment
    const savedAppointment = await appointment.save();

    res.status(201).json({
      success: true,
      message: "Appointment created successfully",
      data: savedAppointment
    });

  } catch (error) {

    // Meaningful validation response
    res.status(400).json({
      success: false,
      message: "Appointment validation failed",
      error: error.message
    });

  }

});

app.use((err, req, res, next) => {

  res.status(500).json({
    success: false,
    message: "Internal Server Error"
  });

});