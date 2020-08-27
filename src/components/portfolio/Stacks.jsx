import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

// import Material UI Components
import {
    Box,
    Card,
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
        padding: "5px",
        alignItems: "center",
    },
    cards: {
        width: "auto",
        display: "flex",
        flexWrap: "wrap",
        minWidth: "100%",
        justifyItems: "stretch",
        justifyContent: "flex-end",
        flexDirection: "row-reverse",
    },
    card: {
        margin: "5px",
        backgroundColor: "#fbfbfb",
        borderRadius: "1px",
    },
    links: {
        margin: "0 5px",
        padding: "16px",
    },
    title: {
        fontFamily: "'Sora', sans-serif",
        fontWeight: "100",
        alignSelf: "center",
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
            <CardHeader
                className={classes.card}
                title={stack.name}
                subheader={stack.version_used}
            />
            <Link className={classes.links} href={stack.site}>
                site officiel
            </Link>
        </Card>
    ));

    const listOfTools = tools.map((tool) => (
        <Card className={classes.card}>
            <CardHeader
                className={classes.card}
                title={tool.name}
                subheader={tool.version_used}
            />
            <Link className={classes.links} href={tool.site}>
                site officiel
            </Link>
        </Card>
    ));
    return (
        <Container className={classes.root}>
            <Box className={classes.cards}>
                {listOfStacks}
                <Typography className={classes.title} variant="h3">
                    Les technos
                </Typography>
            </Box>
            <Divider />

            <Box className={classes.cards}>
                {listOfTools}
                <Typography className={classes.title} variant="h3">
                    Les outils
                </Typography>
            </Box>
        </Container>
    );
}

export default Stacks;
