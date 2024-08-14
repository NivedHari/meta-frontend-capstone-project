import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Homepage from "./Pages/Homepage";
import AboutPage from "./Pages/AboutPage";
import Menu from "./Pages/Menu";
import OrderOnline from "./Pages/OrderOnline";
import Login from "./Pages/Login";
import BookingPage from "./Pages/BookingPage";
import ConfirmedBooking from "./Pages/ConfirmedBooking";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path="/order" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booking-confirm" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
