// models/Appointment.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config');
const User = require('./User');

const Appointment = sequelize.define('Appointment', {
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    time: {
        type: DataTypes.TIME,
        allowNull: false
    }
});

Appointment.belongsTo(User);

module.exports = Appointment;