// src/pages/Booking.js
import React from 'react';
import './Booking.css';

const Booking = () => (
    <div className="booking-container">
        <div className="booking-overlay">
            <h2>Hi, I am Gabbug!</h2>
            <p>Ready for a Quality Software? Let's Dig Deep Into Your Thought!</p>
            <div className="booking-calendar">
                {/* Add your calendar component here */}
                <p>Select a Day</p>
                <div className="calendar">
                    {/* Example of a simple calendar layout */}
                    <ul>
                        <li>Mon</li>
                        <li>Tue</li>
                        <li>Wed</li>
                        <li>Thu</li>
                        <li>Fri</li>
                        <li>Sat</li>
                        <li>Sun</li>
                    </ul>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                    </ul>
                    {/* Continue this structure for the full month */}
                </div>
            </div>
        </div>
    </div>
);

export default Booking;
