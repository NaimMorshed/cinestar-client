import React from 'react';
import { Link } from 'react-router-dom';

const Description = () => {
    return (
        <div className="upload-parent">
            <header className="bg-danger text-light center-col">
                <h1>Add some description with the video</h1>
            </header>

            <main>
                <form>
                    <input type="text" placeholder="Description" />
                </form>
            </main>

            <footer className="container">
                <button onClick={() => window.history.back()} className="btn btn-danger me-3">Previous</button>
                <Link to="/category"><button className="btn btn-success">Next</button></Link>
            </footer>
        </div>
    );
};

export default Description;