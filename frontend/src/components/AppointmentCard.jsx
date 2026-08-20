function AppointmentCard({
  patientName,
  doctorName,
  date,
  timeSlot,
  status
}) {
  return (
    <div className="appointment-card">

      <h2>Appointment Details</h2>

      <p>Patient Name: {patientName}</p>

      <p>Doctor Name: {doctorName}</p>

      <p>Date: {date}</p>

      <p>Time Slot: {timeSlot}</p>

      {/* Status class changes according to status */}
      <p className={`status ${status}`}>
        Status: {status}
      </p>

    </div>
  );
}

export default AppointmentCard;