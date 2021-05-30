import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="center-col">
            <h1>Home</h1>
            <Link to="/login"><button className="btn btn-danger">Login</button></Link>
            <Link to="/upload"><button className="btn btn-warning mt-3">Upload video</button></Link>
        </div>
    );
};

export default Home;