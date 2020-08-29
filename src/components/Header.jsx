// import core
import React from "react";
import { NavLink } from "react-router-dom";

// import style
import "../responsive.css"

const Header = ({ lastProject }) => {
    return (
        <header className="header">
            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to={`/portfolio/${lastProject.id}/description`}>
                    Portfolio
                </NavLink>

                <NavLink to="/details">Détails</NavLink>

                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </header>
    );
};

export default Header;
