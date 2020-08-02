import React, { useState, useEffect } from "react";
import Axios from "axios";
import {
    Link,
    Switch,
    Route,
    useRouteMatch,
    useParams,
} from "react-router-dom";
import { Tabs, Tab, Card } from "@material-ui/core";

// import components

// import data

// import style
import "../style/portfolio.css";

function NavBar() {
    let { path, url } = useRouteMatch();

    const tabLabel = [
        {
            label: "Description",
            url: `${url}/description`
        },
        {
            label: "L'équipe",
            url: `${url}/team`
        },
        {
            label: "Les stacks",
            url: `${url}/stacks`
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
        <Card>
            <Tabs>{links}</Tabs>
        </Card>
    );
}

export default NavBar;
