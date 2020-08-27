// import core
import React from "react";
import { Link } from "react-router-dom";

// import Material UI
import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    root: {
        gridArea: "main",
        display: "flex",
        flexWrap: "wrap",
        justifyContent:"center",
        alignContent: "space-evenly",
        backgroundColor: "#fbfbfb",
        borderRadius: "0px",
    },
    previews_container: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent",
    },
    cards_container: {
        padding: "2px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    link: {
        padding: "6px",
        display: "flex",
        justifyContent: "center",
        backfaceVisibility: "hidden",
    },
    image: {
        width: "auto",
        maxWidth:"90%",
        height: "512px",
        objectFit: "cover",
        boxShadow:
            "0px 2px 1px -1px rgba(0,0,0,0.2), \
        0px 1px 1px 0px rgba(0,0,0,0.14), \
        0px 1px 3px 0px rgba(0,0,0,0.12)",
    },
    title: {
        font: "8em arial, sans-serif",
        fontFamily: "'Poiret One', cursive",
        color: "transparent",
        textShadow:"3px 3px 0px #cccccc, 3.7px 3.4px 3px rgb(255, 255, 255), 4.1px 0.9px 1.5px rgb(77, 77, 77), 5.1px 0.5px 0.3px rgb(255,255,255)",
        letterSpacing: "2px",
        margin: "0",
        position: "relative",
    },
    subtitle: {
        color: "rgb(80,80,80)",
        marginLeft: "12px",
    },
}));

function Home({ projects }) {
    const classes = useStyle();

    const lastProjects = projects.map((project) => (
        <Box className={classes.cards_container}>
            <Link
                className={classes.link}
                to={`/portfolio/${project.id}/description`}
            >
                <img
                    className={classes.image}
                    src={`${process.env.REACT_APP_HOST}/latest/${project.id}`}
                    alt={`screenshot ${project.name} : ${project.id} `}
                />
            </Link>
            <Typography className={classes.subtitle}>{project.name}</Typography>
        </Box>
    ));

    return (
        <Box className={classes.root}>
            <Typography className={classes.title} variant="h1">
                Projets récents
            </Typography>
            <Box className={classes.previews_container}>
                {lastProjects.slice(0, 3)}
            </Box>
        </Box>
    );
}

export default Home;
