// src/pages/Home.js
import React from 'react';
import './Home.css'; // Assuming you have a CSS file for Home specific styles

const Home = () => (
    <div className="container">
        <div className="image-container">
            <img src="https://img.freepik.com/free-photo/sunset-bridge-road_1321-1657.jpg?t=st=1722181141~exp=1722184741~hmac=0c76c6c5c83bb35971f5181c49876f80f73dc0a43499ca5cab61707324580855" alt="Collaborate" />
            <div className="overlay-text">Collaborate</div>
        </div>
        <h2>Feed Your Intelligence with our Testing Approach</h2>
        <div className="center-button">
            <button className="get-started">Get Started</button>
        </div>
    </div>
);

export default Home;

