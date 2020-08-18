// import core
import React from "react";
import { Link } from "react-router-dom";

// import library
import { Frame } from "framer";

// import Material UI
import { Card, makeStyles, Paper, Typography } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    root: {
        gridArea: "main",
        display: "flex",
        flexWrap: "wrap",
        padding: "5%",
    },
    preview_container: {
        width: "30%",
        padding: "1%",
    },
    content: {
        width: "auto",
        maxWidth: "80%",
    },
    image: {
        margin: "1%",
        maxWidth: "100%",
    },
    title: {
        font: "bold 100px arial, sans-serif",
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
        margin: "0 auto",
        position: "relative",
        MozBackgroundClip: "text",
    },
}));

function Home({ projects }) {
    const classes = useStyle();

    const lastProjects = projects.map((project) => (
        <Card className={classes.preview_container}>
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
            <Frame
                backgroundColor={"none"}
                size={"auto"}
                center
                position={"relative"}
                style={{
                    display: "flex",
                    top: "15%",
                    width: "100%",
                    height: "min-content",
                    justifyContent: "space-between",
                    alignItems: "center",
                    justifySelf: "flex-start",
                }}
            >
                {lastProjects.slice(0, 3)}
            </Frame>
        </Paper>
    );
}

export default Home;
