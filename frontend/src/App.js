// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Booking from './pages/Booking';
import AppointmentHistory from './pages/AppointmentHistory';
import NotFound from './pages/NotFound';

const App = () => {
    const [authToken, setAuthToken] = useState('');

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<h2>Welcome to the Appointment Booking System</h2>} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn setAuthToken={setAuthToken} />} />
                <Route path="/booking" element={authToken ? <Booking authToken={authToken} /> : <p>Please sign in to book an appointment</p>} />
                <Route path="/history" element={authToken ? <AppointmentHistory authToken={authToken} /> : <p>Please sign in to view appointment history</p>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
