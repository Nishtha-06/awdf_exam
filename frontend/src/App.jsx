
import { BrowserRouter, Routes, Route } from "react-router-dom"; // react-router-dom = navigation between different pages

import HomePage from "./pages/HomePage";
import DoctorsPage from "./pages/DoctorsPage";
import BookingPage from "./pages/BookingPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>


      <Navbar />

      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/doctors" element={<DoctorsPage />} />

        <Route path="/booking" element={<BookingPage />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;