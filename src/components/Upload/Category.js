import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div className="upload-parent">
            <header className="bg-danger text-light center-col">
                <h1>Choose a category for your video</h1>
            </header>

            <main className="d-flex justify-content-center align-items-center flex-wrap">
                <section className="technology center-col text-light card-hover"><h3>Technology</h3></section>
                <section className="music center-col text-light card-hover"><h3>Music</h3></section>
                <section className="tutorial center-col text-light card-hover"><h3>Tutorial</h3></section>
                <section className="movie center-col text-light card-hover"><h3>Movie</h3></section>
                <section className="blog center-col text-light card-hover"><h3>Blog</h3></section>
                <section className="entertainment center-col text-light card-hover"><h3>Entertainment</h3></section>
            </main>

            <footer className="container">
                <button onClick={() => window.history.back()} className="btn btn-danger me-3">Previous</button>
                <Link to="/thumbnail"><button className="btn btn-success">Next</button></Link>
            </footer>
        </div>
    );
};

export default Category;