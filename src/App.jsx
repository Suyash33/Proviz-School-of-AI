import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router and Routing components
import Hero from './components/Hero';
import Features from './components/Feautures';
import Testimonials from './components/Testimonials';
import ApplicationForm from './components/ApplicationForm';
import Footer from './components/Footer';
import AdminPanel from './components/Adminpanel'; // Import the Admin Panel


function App() {
  const [isApplicationFormOpen, setIsApplicationFormOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true); // Assume user is admin for now, update based on logic

  return (
    <Router>
 
      <Routes>
        {/* Admin route */}
        <Route
          path="/admin"
          element={isAdmin ? <AdminPanel /> : <div>You do not have access to the admin panel.</div>}
        />

        {/* Main user route */}
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-white">
              <Hero onApplyClick={() => setIsApplicationFormOpen(true)} />
              <Features />
              <Testimonials />
              <Footer />
              <ApplicationForm
                isOpen={isApplicationFormOpen}
                onClose={() => setIsApplicationFormOpen(false)}
              />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;


