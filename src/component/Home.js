import React from 'react';
import { Link } from "react-router-dom";


function Home(props) {
    return (
        <div>
            <h1>This is my Home page</h1>
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="about">About</Link>
            </nav>
        </div>
    );
}

export default Home;