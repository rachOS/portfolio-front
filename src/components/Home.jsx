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
        padding: "12px",
        backgroundColor: "#F0F0F0",
        borderRadius: "0px",
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
        color: "transparent",
        textShadow:
            "3px 3px 0px rgb(96,175,231), \
             1.4px 4px 5px rgb(240,240,240,0.5), \
             3.7px 3.4px 1px rgb(0,0,0), \
             4.1px 0.9px 1.5px rgb(12, 34, 164), \
             1.2px 2.9px 0.3px rgb(255,255,255)",
        top: "30px",
        letterSpacing: "-4px",
        margin: "0",
        position: "relative",
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
