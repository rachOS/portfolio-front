// import core
import React from "react";
import { Link } from "react-router-dom";

// import css
import "./style/header.css";

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
        borderRadius: "0",
    },
    menu_list: {
        width: "100%",
        display: "flex",
        padding: "0",
    },
    links: {
        width: "100%",
        textDecoration: "none",
    },
    button: {
        fontFamily: "'Sora', sans-serif",
        color: "#000",
        fontWeight: "400",
        textTransform: "lowercase",
        borderRadius: "1px",
        padding: "5%",
        width: "100%",
        height: "100%",
    },
    home: {
        backgroundColor: "#0080ff",
    },
    portfolio: {
        backgroundColor: "#0080ff",
    },
    details: {
        backgroundColor: "#0080ff",
    },
    contact: {
        backgroundColor: "#0080ff",
    },
}));

const Header = ({ lastProject }) => {
    const classes = useStyle();
    return (
        <Paper className={classes.root}>
            <MenuList className={classes.menu_list}>
                <Link className={classes.links} to="/">
                    <Button className={[classes.button, classes.home]}>
                        <HomeIcon /> Accueil
                    </Button>
                </Link>
                <Link
                    className={classes.links}
                    to={`/portfolio/${lastProject.id}/description`}
                >
                    <Button className={[classes.button, classes.portfolio]}>
                        <CollectionsIcon /> Portfolio
                    </Button>
                </Link>

                <Link className={classes.links} to="/details">
                    <Button className={[classes.button, classes.details]}>
                        <InfoIcon /> Détails
                    </Button>
                </Link>

                <Link className={classes.links} to="/contact">
                    <Button className={[classes.button, classes.contact]}>
                        <ContactMailIcon /> Contact
                    </Button>
                </Link>
            </MenuList>
        </Paper>
    );
};

export default Header;
