import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Route, Switch, useRouteMatch, useParams } from "react-router-dom";

// import Material UI Components
import {
    Container,
    Card,
    List,
    ListItem,
    ListItemIcon,
    ListItemAvatar,
    ListSubheader,
    ListItemText,
    Link,
    Avatar,
    Box,
    Typography,
    CardContent,
    Divider,
} from "@material-ui/core";

// import components

// import data

// import style
import "../style/portfolio.css";

function Stacks() {
    const { id } = useParams();
    const [stacks, setStacks] = useState([{}]);
    const [tools, setTools] = useState([{}]);

    const getStacksByProject = (idProject) => {
        const stacksURL = `${process.env.REACT_APP_HOST}/projects/${idProject}/stacks`;
        Axios.get(stacksURL)
            .then((response) => response.data)
            .then((data) => setStacks(data));
    };
    const getToolsByProject = (idProject) => {
        const stacksURL = `${process.env.REACT_APP_HOST}/projects/${idProject}/tools`;
        Axios.get(stacksURL)
            .then((response) => response.data)
            .then((data) => setTools(data));
    };

    useEffect(() => {
        getStacksByProject(id);
        getToolsByProject(id);
    }, [id]);

    const listOfStacks = stacks.map((stack) => (
        <React.Fragment>
            <ListItem>
                <ListItemText
                    inset
                    primary={stack.name}
                    secondary={stack.version_used}
                />
                <ListItemText inset button>
                    <Link href={stack.site}>site officiel</Link>
                </ListItemText>
            </ListItem>
        </React.Fragment>
    ));

    const listOfTools = tools.map((tool) => (
        <React.Fragment>
            <ListItem>
                <ListItemText
                    inset
                    primary={tool.name}
                    secondary={tool.version_used}
                />
                <ListItemText inset button>
                    <Link href={tool.site}>site officiel</Link>
                </ListItemText>
            </ListItem>
        </React.Fragment>
    ));
    return (
        <React.Fragment>
            <Typography variant="h3">Les technos</Typography>
            <List>{listOfStacks}</List>
            <Divider />
            <Typography variant="h3">Les outils</Typography>
            <List >{listOfTools}</List>
        </React.Fragment>
    );
}

export default Stacks;
