
// function DoctorsPage() {
//   return (
//     <div>
//       <h1>Doctors Page</h1>
//       <p>Here you can see our doctors.</p>
//     </div>
//   );
// }

// export default DoctorsPage;

// src/pages/DoctorsPage.jsx

import { useEffect, useState } from "react";

function DoctorsPage() {

  // State for doctor data
  const [data, setData] = useState([]);

  // State for loading
  const [loading, setLoading] = useState(true);

  // State for error
  const [error, setError] = useState("");


  // Run when the page is loaded
  useEffect(() => {

    // Async function to get doctors
    const getDoctors = async () => {

      try {

        // Call Express API
        const response = await fetch(
          "http://localhost:5000/api/v1/doctors"
        );

        // Check if request was successful
        if (!response.ok) {
          throw new Error("Failed to get doctors");
        }

        // Convert response to JSON
        const result = await response.json();

        // Store doctor data
        setData(result.data);

      } catch (err) {

        // Store error message
        setError(err.message);

      } finally {

        // Stop loading
        setLoading(false);

      }
    };

    // Call the function
    getDoctors();

  }, []);



// Show error message
if (error) {
return (
    <div>
    <h1>Doctors</h1>
    <p>Error: {error}</p>
    </div>
);
}


// Show doctors
return (
<div>

    <h1>Doctors</h1>

    {data.map((doctor) => (

    <div key={doctor.id}>

        <h2>{doctor.name}</h2>

        <p>
        Specialisation: {doctor.specialisation}
        </p>

        <p>
        Availability:{" "}
        {doctor.available ? "Available" : "Not Available"}
        </p>

        <hr />

    </div>

    ))}

</div>
);
}

export default DoctorsPage;