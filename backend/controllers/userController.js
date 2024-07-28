// controllers/userController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.signup = async (req, res) => {
    const { username, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, password: hashedPassword });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: 'Username already exists' });
    }
};

exports.signin = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ where: { username } });
        if (!user || !await bcrypt.compare(password, user.password)) {
            throw new Error();
        }

        const token = jwt.sign({ userId: user.id }, 'secret_key', { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(401).json({ error: 'Invalid username or password' });
    }
};
