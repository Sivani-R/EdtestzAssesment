// src/pages/SignIn.js
import React, { useState } from 'react';
import axios from 'axios';

const SignIn = ({ setAuthToken }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/signin', { username, password });
            setAuthToken(response.data.token);
            setMessage('User signed in successfully');
        } catch (error) {
            setMessage('Error signing in');
        }
    };

    return (
        <div>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Sign In</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default SignIn;
