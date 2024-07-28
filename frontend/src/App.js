// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Booking from './pages/Booking';
import AppointmentHistory from './pages/AppointmentHistory';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Contact from './pages/Contact'; // Import the Contact component
import './App.css';

const App = () => {
    const [authToken, setAuthToken] = useState('');

    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/signin" element={<SignIn setAuthToken={setAuthToken} />} />
                    <Route path="/booking" element={authToken ? <Booking authToken={authToken} /> : <p className='welcomeheading'>Please sign in to book an appointment</p>} />
                    <Route path="/history" element={authToken ? <AppointmentHistory authToken={authToken} /> : <p className='welcomeheading'>Please sign in to view appointment history</p>} />
                    <Route path="/contact" element={<Contact />} /> {/* Add route for Contact page */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
        </Router>
    );
};

export default App;

