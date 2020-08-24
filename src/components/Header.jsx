// import core
import React from "react";
import { Link } from "react-router-dom";

// import css
import "./style/header.css"

// import Material UI
import { Button, makeStyles, MenuList, Paper } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import InfoIcon from "@material-ui/icons/Info";
import CollectionsIcon from "@material-ui/icons/Collections";

const useStyle = makeStyles((theme) => ({
    root: {
        gridArea: "header",
        backgroundColor: "#F0F0F0",
        display: "flex",
        alignItems: "center",
        padding: "0 1%",
        borderRadius: "0px 10px 0px 0px",
    },
    button: {
        borderRadius: "1px",
        fontSize:"0.8em",
        padding: "12px",
        margin: "12px",
        height: "64px",
    },
    home: {
        backgroundColor: "#16a62e",
    },
    portfolio: {
        backgroundColor: "#f36e20",
    },
    details: {
        backgroundColor: "#f3d720",
    },
    contact: {
        backgroundColor: "#b720f3",
    },
}));

const Header = ({ lastProject }) => {
    const classes = useStyle();
    return (
        <Paper className={classes.root}>
            <MenuList>
                <Link to="/">
                    <Button className={[classes.button, classes.home]}>
                        <HomeIcon /> Accueil
                    </Button>
                </Link>
                <Link to={`/portfolio/${lastProject.id}/description`}>
                    <Button className={[classes.button, classes.portfolio]}>
                        <CollectionsIcon /> Portfolio
                    </Button>
                </Link>

                <Link to="/details">
                    <Button className={[classes.button, classes.details]}>
                        <InfoIcon /> Détails
                    </Button>
                </Link>

                <Link to="/contact">
                    <Button className={[classes.button, classes.contact]}>
                        <ContactMailIcon /> Contact
                    </Button>
                </Link>
            </MenuList>
        </Paper>
    );
};

export default Header;
