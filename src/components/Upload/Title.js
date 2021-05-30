import React from 'react';
import './Upload.css';

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
                <button className="btn btn-success">Next</button>
            </footer>
        </div>
    );
};

export default Title;