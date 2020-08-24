import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Container, makeStyles, Tabs, Tab } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "transparent",
    },
    content: {
        margin: "5px",
        padding: "10px",
        maxWidth: "50%",
    },
    tabs:{
        textDecoration:"none",
        color:"#000000"
    }
}));
function NavBar() {
    const classes = useStyles();
    let { url } = useRouteMatch();

    const tabLabel = [
        {
            label: "La description",
            url: `${url}/description`,
        },
        {
            label: "L'équipe",
            url: `${url}/team`,
        },
        {
            label: "Les technos et les outils",
            url: `${url}/stacks-tools`,
        },
        {
            label: "Les fonctionnalités",
            url: `${url}/features`,
        },
    ];

    const links = tabLabel.map((tab) => (
        <Link className={classes.tabs} to={`${tab.url}`}>
            {" "}
            <Tab label={tab.label} />
        </Link>
    ));

    return (
        <Container className={classes.root}>
            <Tabs >{links}</Tabs>
        </Container>
    );
}

export default NavBar;
