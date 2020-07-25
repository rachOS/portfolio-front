// import library
import React from "react";
import { Link } from "react-router-dom";
import { Paper, MenuList, MenuItem } from "@material-ui/core";

// import style
import "../App.css";

// init component
const Header = () => {
    return (
        <Paper className="header">
            <MenuList>
                <MenuItem>
                    <Link to="/">Acceuil</Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/portfolio">Portfolio</Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/details">Détails</Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/contact">Contact</Link>
                </MenuItem>
            </MenuList>
        </Paper>
    );
};

// export component
export default Header;
