import React from 'react';
import { Link } from 'react-router-dom';

const VideoLink = () => {
    return (
        <div className="upload-parent">
            <header className="bg-danger text-light center-col">
                <h1>Insert video link</h1>
            </header>

            <main>
                <form>
                    <input type="text" placeholder="Link" />
                </form>
            </main>

            <footer className="container">
                <button onClick={() => window.history.back()} className="btn btn-danger me-3">Previous</button>
                <Link to="/complete"><button className="btn btn-success">Next</button></Link>
            </footer>
        </div>
    );
};

export default VideoLink;