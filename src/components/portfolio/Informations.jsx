// import core
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

// import components
import Carousel from "./Carousel"
import Description from "./Description";
import Features from "./Features";
import Screenshot from "./Screenshot";
import Share from "./Share";
import Stacks from "./Stacks";
import Team from "./Team";
import NavBar from "./NavBar";

// import Material UI
import {
    Box,
    Container,
    makeStyles,
    Divider,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        gridArea: "form",
        width: "auto",
        maxWidth: "100%",
        display: "grid",
        gridTemplateAreas:
            '"carousel nav" \
        "divider divider" \
        "desc desc"',
        gridTemplateRows: "0.3fr 0.1fr 1fr",
        gridTemplateColumns: "0.4fr 1fr"

    },
    content: {
        display: "flex",
        justifyContent: "center",
        maxWidth: "100%",
        width: "auto",
        padding: "12px",
        gridArea: "desc",
    },
    title: {
        gridArea: "title",
        textAlign: "left",
        margin: "auto 0",
        color:"#888",
        fontSize:"3em",
        fontFamily: "'Poiret One', cursive",
    },
    nav: {
        gridArea: "nav",
    },
    divider: {
        gridArea: "divider",
    },
}));

function Informations({ projects, project }) {
    const classes = useStyles();
    const { path } = useRouteMatch();
    return (
        <Container className={classes.root}>
            <NavBar className={classes.nav} />
            <Carousel projects={projects} />
            {/* <Typography className={classes.title}>{project.name}</Typography> */}
            <Divider className={classes.divider} />
            <Switch>
                <Route path={`${path}/description`}>
                    <Box className={classes.content}>
                        <Description
                            projectName={project.name}
                            url={project.site_link}
                        />
                        <Screenshot project={project} />
                    </Box>
                </Route>
                <Route path={`${path}/team`}>
                    <Box className={classes.content}>
                        <Team project={project} />
                    </Box>
                </Route>
                <Route path={`${path}/stacks-tools`}>
                    <Box className={classes.content}>
                        <Stacks project={project} />
                    </Box>
                </Route>
                <Route path={`${path}/features`}>
                    <Box className={classes.content}>
                        <Features project={project} />
                    </Box>
                </Route>
                <Route path={`${path}/share`}>
                    <Box className={classes.content}>
                        <Share project={project} />
                    </Box>
                </Route>
            </Switch>
        </Container>
    );
}

export default Informations;
