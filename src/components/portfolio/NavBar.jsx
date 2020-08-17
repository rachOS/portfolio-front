import React, { useState, useEffect } from "react";
import Axios from "axios";
import {
    Link,
    Switch,
    Route,
    useRouteMatch,
    useParams,
} from "react-router-dom";
import { Tabs, Tab, Card, Container, Paper } from "@material-ui/core";

// import components

// import data

// import style
import "../style/portfolio.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: "5px",
        backgroundColor: theme.palette.background.paper,
    },
    content: {
        margin: "5px",
        padding: "10px",
        maxWidth: "50%",
    },
}));
function NavBar() {
    const classes = useStyles();
    let { path, url } = useRouteMatch();

    const tabLabel = [
        {
            label: "La description",
            url: `${url}/description`
        },
        {
            label: "L'équipe",
            url: `${url}/team`
        },
        {
            label: "Les technos et les outils",
            url: `${url}/stacks-tools`
        },
        {
            label: "Les fonctionnalités",
            url: `${url}/features`
        },
        {
            label: "Le partage",
            url: `${url}/share`
        },
    ];

    const links = tabLabel.map((tab) => (
        <Link to={`${tab.url}`}>
            {" "}
            <Tab label={tab.label} />
        </Link>
    ));

    return (
        <Container className={classes.root}>
            <Tabs>{links}</Tabs>
        </Container>
    );
}

export default NavBar;
