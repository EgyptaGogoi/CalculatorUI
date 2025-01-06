import React from "react";
import { Link } from "react-router-dom";

export default function Nav(){
    return(<>
        <nav>
            <Link to="/">Home</Link> <br />
            <Link to="/page1">contact</Link> <br />
            <Link to="/page2">about</Link>
        </nav>
    </>)
}