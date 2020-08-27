// import core
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

// import components
import Carousel from "./Carousel"
import Description from "./Description";
import Features from "./Features";
import Stacks from "./Stacks";
import Team from "./Team";
import NavBar from "./NavBar";

// import Material UI
import {
    Box,
    Container,
    makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        gridArea: "form",
        width: "auto",
        height: "auto",
        minHeight:"100%",
        maxWidth: "100%",
        display: "grid",
        gridTemplateAreas:
            '"carousel nav" \
        "desc desc" \
        "desc desc"',
        gridTemplateRows: "0.2fr 1fr 1fr",
        gridTemplateColumns: "0.4fr 1fr",
        padding: "0px",
    },
    content: {
        gridArea: "desc",
        display:"flex",
        height:"100%",
        margin:"12px",
        padding: "12px",
    },
    nav: {
        gridArea: "nav",
    },
}));

function Informations({ projects, project }) {
    const classes = useStyles();
    const { path } = useRouteMatch();
    return (
        <Container className={classes.root}>
            <NavBar className={classes.nav} />
            <Carousel projects={projects} />
            <Switch>
                <Route path={`${path}/description`}>
                    <Box className={classes.content}>
                        <Description
                        project={project}
                            projectName={project.name}
                            url={project.site_link}
                        />
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
            </Switch>
        </Container>
    );
}

export default Informations;
