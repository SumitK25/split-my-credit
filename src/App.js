import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Heros'; // Fixed import name
import FeatureCard from './components/FeatureCard';
import Footer from './components/Footer';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

// Separate component for home page
const HomePage = () => (
  <>
    <Navbar />
    <Hero />
    <div className="features">
      <FeatureCard 
        title="Effortless Payments" 
        description="Run smarter debt, installment, and pre-authorizations." 
      />
      <FeatureCard 
        title="Budgeting Tools" 
        description="Track, control, and optimize all your credit usage." 
      />
      <FeatureCard 
        title="Credit Score Boost" 
        description="Take control with timely reminders and smart planning." 
      />
    </div>
    <Footer />
  </>
);

export default App;