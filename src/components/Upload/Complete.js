import React from 'react';
import checked from '../../images/checked.png';
import { Link } from 'react-router-dom';

const Complete = () => {
    return (
        <div className="upload-parent">
            <header className="bg-danger text-light center-col">
                <h1>Complete</h1>
            </header>

            <main className="center-col">
                <img src={checked} alt="" />
                <h2>Your video has been submitted for approval</h2>
            </main>

            <footer className="container">
                <Link to="/"><button className="btn btn-success">Finish</button></Link>
            </footer>
        </div>
    );
};

export default Complete;