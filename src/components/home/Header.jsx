// import library
import React from "react";

// import style
import "../../main.css";

// init component
const Header = () => {
    return (
        <header className="">
            <nav className="navbar ">
                <div className="nav card">Accueil </div>
                <div className="nav card">Portfolio </div>
                <div className="nav card">Détails </div>
                <div className="nav card">Contact </div>
            </nav>
        </header>
    );
};

// export component
export default Header;
