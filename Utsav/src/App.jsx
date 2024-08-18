import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './pages/Hero';
import Overview from './pages/Overview';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import Login from './Components/Login';
import SignUp from './Components/Signup';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Hero />} />
        <Route path="/Overview" element={<Overview />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;