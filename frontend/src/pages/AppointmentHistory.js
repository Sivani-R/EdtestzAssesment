// src/pages/AppointmentHistory.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AppointmentHistory = ({ authToken }) => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/appointments', {
                    headers: { Authorization: authToken }
                });
                setAppointments(response.data);
            } catch (error) {
                console.error('Error fetching appointments');
            }
        };

        fetchAppointments();
    }, [authToken]);

    return (
        <div>
            <h2>Appointment History</h2>
            <ul>
                {appointments.map((appointment) => (
                    <li key={appointment.id}>{appointment.date} at {appointment.time}</li>
                ))}
            </ul>
        </div>
    );
};

export default AppointmentHistory;
