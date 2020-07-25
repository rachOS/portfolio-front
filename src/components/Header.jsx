// import library
import React from "react";
import { Link } from "react-router-dom";
import { Paper } from "@material-ui/core";

// import style
import "../App.css"

// init component
const Header = () => {
    return (
        <Paper className="header">
            <ul>
                <li>
                    <Link to="/">Acceuil</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/details">Détails</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </Paper>
    );
};

// export component
export default Header;
