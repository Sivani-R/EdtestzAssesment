// controllers/appointmentController.js
const Appointment = require('../models/Appointment');

exports.createAppointment = async (req, res) => {
    const { date, time } = req.body;
    const userId = req.userId;

    try {
        const appointment = await Appointment.create({ date, time, UserId: userId });
        res.status(201).json(appointment);
    } catch (error) {
        res.status(400).json({ error: 'Error creating appointment' });
    }
};

exports.getAppointments = async (req, res) => {
    const userId = req.userId;

    try {
        const appointments = await Appointment.findAll({ where: { UserId: userId } });
        res.json(appointments);
    } catch (error) {
        res.status(400).json({ error: 'Error fetching appointments' });
    }
};
