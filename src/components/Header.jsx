// import core
import React from "react";
import { Link } from "react-router-dom";

// import style
import "./style/header.css";
import "../responsive.css"

const Header = ({ lastProject }) => {
    return (
        <header className="header">
            <nav>
                <Link to="/">Accueil</Link>
                <Link to={`/portfolio/${lastProject.id}/description`}>
                    Portfolio
                </Link>

                <Link to="/details">Détails</Link>

                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
};

export default Header;
