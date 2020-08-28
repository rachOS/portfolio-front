// import core
import React from "react";
import { Link } from "react-router-dom";

// import css
import "./style/header.css";

const Header = ({ lastProject }) => {
    return (
        <header>
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
