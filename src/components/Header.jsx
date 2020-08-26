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
        // padding: "0 1%",
        borderRadius: "0",
    },
    menu_list: {
        width: "100%",
        display: "flex",
        padding:"0"
    },
    links: {
        width: "100%",
        textDecoration: "none"
    },
    button: {
        fontFamily: "'Sora', sans-serif",
        color:"#000",
        fontWeight: "400",
        textTransform:"lowercase",
        borderRadius: "1px",
        padding:"5%",
        width: "100%",
        height:"100%",

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
        // borderRadius: "0px 10px 0px 0px",
        backgroundColor: "#0080ff",
    },
    icon:{
        // color:"#fbfbfb"
    }
}));

const Header = ({ lastProject }) => {
    const classes = useStyle();
    return (
        <Paper className={classes.root}>
            <MenuList className={classes.menu_list}>
                <Link className={classes.links} to="/">
                    <Button className={[classes.button, classes.home]}>
                        <HomeIcon className={classes.icon} /> Accueil
                    </Button>
                </Link>
                <Link
                    className={classes.links}
                    to={`/portfolio/${lastProject.id}/description`}
                >
                    <Button className={[classes.button, classes.portfolio]}>
                        <CollectionsIcon className={classes.icon}  /> Portfolio
                    </Button>
                </Link>

                <Link className={classes.links} to="/details">
                    <Button className={[classes.button, classes.details]}>
                        <InfoIcon className={classes.icon}  /> Détails
                    </Button>
                </Link>

                <Link className={classes.links} to="/contact">
                    <Button className={[classes.button, classes.contact]}>
                        <ContactMailIcon className={classes.icon}  /> Contact
                    </Button>
                </Link>
            </MenuList>
        </Paper>
    );
};

export default Header;
