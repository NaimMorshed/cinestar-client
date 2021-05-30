import React from 'react';
import { Link } from 'react-router-dom';

const Thumbnail = () => {
    return (
        <div className="upload-parent">
            <header className="bg-danger text-light center-col">
                <h1>Attach thumbnail with your video</h1>
            </header>

            <main>
                <form>
                    <input className="file-input" type="file" name="" id="" />
                </form>
            </main>

            <footer className="container">
                <button onClick={() => window.history.back()} className="btn btn-danger me-3">Previous</button>
                <Link to="/videoLink"><button className="btn btn-success">Next</button></Link>
            </footer>
        </div>
    );
};

export default Thumbnail;