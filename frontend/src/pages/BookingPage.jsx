// import AppointmentCard from "../components/AppointmentCard";

// function BookingPage() {
//   // Appointment data passed to AppointmentCard using props
//   const appointment = {
//     patientName: "Nishtha",
//     doctorName: "Dr. Raj Patel",
//     date: "20-08-2026",
//     timeSlot: "10:00 AM",
//     status: "confirmed"
//   };

//   return (
//     <div>
//       <h1>Booking Page</h1>

//       <AppointmentCard
//         patientName={appointment.patientName}
//         doctorName={appointment.doctorName}
//         date={appointment.date}
//         timeSlot={appointment.timeSlot}
//         status={appointment.status}
//       />
//     </div>
//   );
// }

// export default BookingPage;

import { useState } from "react";

function BookingPage() {

  // Store all form values in one state
  const [formData, setFormData] = useState({
    patientName: "",
    doctorName: "",
    date: "",
    timeSlot: ""
  });

  // Another state value for selected doctor
  const [selectedDoctor, setSelectedDoctor] = useState("");

  // This function runs whenever an input changes
  const handleChange = (event) => {

    const { name, value } = event.target;

    // Update form data
    setFormData({
      ...formData,
      [name]: value
    });

    // Update selected doctor
    if (name === "doctorName") {
      setSelectedDoctor(value);
    }
  };

  // Form submit
  const handleSubmit = (event) => {

    // Prevent page reload
    event.preventDefault();

    alert("Appointment submitted!");
  };

  return (
    <div>

      <h1>Booking Page</h1>

      <form onSubmit={handleSubmit}>

        {/* Patient name */}
        <label>Patient Name:</label>

        <input
          type="text"
          name="patientName"
          value={formData.patientName}
          onChange={handleChange}
        />

        <br /><br />

        {/* Doctor name */}
        <label>Doctor Name:</label>

        <input
          type="text"
          name="doctorName"
          value={formData.doctorName}
          onChange={handleChange}
        />

        <br /><br />

        {/* Date */}
        <label>Date:</label>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />

        <br /><br />

        {/* Time slot */}
        <label>Time Slot:</label>

        <select
          name="timeSlot"
          value={formData.timeSlot}
          onChange={handleChange}
        >
          <option value="">Select Time</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="2:00 PM">2:00 PM</option>
          <option value="4:00 PM">4:00 PM</option>
        </select>

        <br /><br />

        <button type="submit">
          Book Appointment
        </button>

      </form>

      {/* Display state values as they change */}

      <h3>Entered Patient Name:</h3>

      <p>{formData.patientName}</p>

      <h3>Selected Doctor:</h3>

      <p>{selectedDoctor}</p>

    </div>
  );
}

export default BookingPage;