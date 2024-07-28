// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config');
const userRoutes = require('./routes/userRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api', userRoutes);
app.use('/api', appointmentRoutes);

app.use((req, res) => {
    res.status(404).json({ error: 'Not Found' });
});

const startServer = async () => {
    try {
        await sequelize.sync();
        app.listen(5000, () => {
            console.log('Server is running on port 5000');
        });
    } catch (error) {
        console.error('Unable to start the server:', error);
    }
};

startServer();
