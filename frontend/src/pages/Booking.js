// src/pages/Booking.js
import React, { useState } from 'react';
import axios from 'axios';

const Booking = ({ authToken }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:5000/api/appointments', { date, time }, {
                headers: { Authorization: authToken }
            });
            setMessage('Appointment booked successfully');
        } catch (error) {
            setMessage('Error booking appointment');
        }
    };

    return (
        <div>
            <h2>Book an Appointment</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Date:</label>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div>
                    <label>Time:</label>
                    <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
                </div>
                <button type="submit">Book</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Booking;
