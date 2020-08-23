import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

// import Material UI Components
import {
    Box,
    Card,
    CardActions,
    CardHeader,
    Container,
    Divider,
    Link,
    makeStyles,
    Typography,
} from "@material-ui/core";

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
        justifyContent: "center",
        width: "auto",
        minWidth: "100%",
        margin: "12px",
    },
    card: {
        display: "flex",
        alignItems: "center",
        padding: "6px",
        margin: "5px",
    },
    text: {
        margin: "0 5px",
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
            <Typography className={classes.text}>{stack.name}</Typography>
            <Typography className={classes.text} variant="caption">
                {stack.version_used}
            </Typography>
            <Link className={classes.text} href={stack.site}>
                site officiel
            </Link>
        </Card>
    ));

    const listOfTools = tools.map((tool) => (
        <Card className={classes.card}>
            <Typography className={classes.text}>{tool.name}</Typography>
            <Typography className={classes.text} variant="caption">
                {tool.version_used}
            </Typography>
            <Link className={classes.text} href={tool.site}>
                site officiel
            </Link>
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
