import React from 'react';
import { Link } from "react-router-dom";



function Assignments(props) {
    return (
        <div>
            <h1>This is my Assignments page</h1>
            <nav>
                <Link to="favouritecolor">FavouriteColor</Link> |{" "}
                <Link to="favouritecolorcheckbox">FavouriteColorCheckbox</Link>
            </nav>
           
        </div>
        
    );
}

export default Assignments;