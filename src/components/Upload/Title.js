import React from 'react';
import './Upload.css';
import { Link } from 'react-router-dom';

const Title = () => {
    return (
        <div className="upload-parent">
            <header className="bg-danger text-light center-col">
                <h1>Lets add title to your video</h1>
            </header>

            <main>
                <form>
                    <input type="text" placeholder="Title" />
                </form>
            </main>

            <footer className="container">
                <Link to="/description"><button className="btn btn-success">Next</button></Link>
            </footer>
        </div>
    );
};

export default Title;