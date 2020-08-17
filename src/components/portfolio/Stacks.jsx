import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Route, Switch, useRouteMatch, useParams } from "react-router-dom";

// import Material UI Components
import {
    Container,
    Card,
    CardHeader,
    Link,
    CardActions,
    Box,
    Typography,
    CardContent,
    Divider,
} from "@material-ui/core";

// import components

// import data

// import style
import "../style/portfolio.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "start",
        padding: "5px",
    },
    cards: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        width: "auto",
        minWidth: "100%",
        // border: "1px solid red",
    },
    card: {
        margin: "5px",
        // border: "1px solid green",
    },
}));

function Stacks() {
    const classes = useStyles();
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
        <Card className={classes.card}>
            <CardHeader title={stack.name} subheader={stack.version_used} />
            <CardActions>
                <Link href={stack.site}>site officiel</Link>
            </CardActions>
        </Card>
    ));

    const listOfTools = tools.map((tool) => (
        <Card className={classes.card}>
            <CardHeader title={tool.name} subheader={tool.version_used} />
            <CardActions>
                <Link href={tool.site}>site officiel</Link>
            </CardActions>
        </Card>
    ));
    return (
        <Container className={classes.root}>
            <Typography variant="h3">Les technos</Typography>
            <Box className={classes.cards}>{listOfStacks}</Box>
            <Divider />
            <Typography variant="h3">Les outils</Typography>
            <Box className={classes.cards}>{listOfTools}</Box>
        </Container>
    );
}

export default Stacks;
