import React from "react";
import { Link } from "react-router-dom";

export default function Error(){
    return(<>
        <h1>404 Page not found</h1><br />
        <button><Link to="/"> Back to Home page</Link></button>
    </>)
}