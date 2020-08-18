// import core
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

// import components
import Description from "./Description";
import Features from "./Features";
import Share from "./Share";
import Stacks from "./Stacks";
import Team from "./Team";
import NavBar from "./NavBar";

// import Material UI
import { Container, makeStyles, Paper, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        gridArea: "form",
    },
    content: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "10px",
        width: "100%",
        backgroundColor: theme.palette.background.paper,
    },
}));

function Informations({ project }) {
    const classes = useStyles();
    const { path } = useRouteMatch();
    return (
        <Paper className={classes.root}>
            <NavBar />
            <Divider />
            <Switch>
                <Route path={`${path}/description`}>
                    <Container>
                        <Description
                            projectName={project.name}
                            url={project.site_link}
                        />
                    </Container>
                </Route>
                <Route path={`${path}/team`}>
                    <Container className={classes.content}>
                        <Team project={project} />
                    </Container>
                </Route>
                <Route path={`${path}/stacks-tools`}>
                    <Container className={classes.content}>
                        <Stacks project={project} />
                    </Container>
                </Route>
                <Route path={`${path}/features`}>
                    <Container className={classes.content}>
                        <Features project={project} />
                    </Container>
                </Route>
                <Route path={`${path}/share`}>
                    <Container className={classes.content}>
                        <Share project={project} />
                    </Container>
                </Route>
            </Switch>
        </Paper>
    );
}

export default Informations;
