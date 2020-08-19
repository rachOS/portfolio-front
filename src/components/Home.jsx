// import core
import React from "react";
import { Link } from "react-router-dom";

// import library
import { Frame } from "framer";

// import Material UI
import { Box, Card, makeStyles, Paper, Typography } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    root: {
        gridArea: "main",
        display: "flex",
        flexWrap: "wrap",
        alignContent: "flex-start",
        padding: "5%",
    },
    preview: {
        width: "30%",
        padding: "1%",
    },
    previews_container: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: "80px",
    },
    image: {
        margin: "1%",
        maxWidth: "100%",
    },
    title: {
        font: "bold 128px arial, sans-serif",
        backgroundColor: "#a3a3a3",
        color: "transparent",
        textShadow:
            "4px 3px 1px rgba(255, 255, 255, 0.1), \
        4px 3px 1px rgba(255, 255, 255, 0.1), \
        4px 3px 1px rgba(255, 255, 255, 0.1), \
        4px 3px 1px rgba(255, 255, 255, 0.1)",
        webkitBackgroundClip: "text",
        backgroundClip: "text",
        top: "30px",
        letterSpacing: "-4px",
        margin: "0",
        position: "relative",
        MozBackgroundClip: "text",
    },
}));

function Home({ projects }) {
    const classes = useStyle();

    const lastProjects = projects.map((project) => (
        <Card className={classes.preview}>
            <Link to={`/portfolio/${project.id}/description`}>
                <img
                    className={classes.image}
                    src={`${process.env.REACT_APP_HOST}/latest/${project.id}`}
                    alt={`screenshot ${project.name} : ${project.id} `}
                />
            </Link>
        </Card>
    ));

    return (
        <Paper className={classes.root}>
            <Typography className={classes.title} variant="h1">
                Projets récents
            </Typography>
            <Box className={classes.previews_container}>
                {lastProjects.slice(0, 3)}
            </Box>
        </Paper>
    );
}

export default Home;
