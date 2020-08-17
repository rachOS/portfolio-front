import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Card, Container, Box } from "@material-ui/core";

// import components
import Description from "./Description";
import Features from "./Features";
import Share from "./Share";
import Stacks from "./Stacks";
import Team from "./Team";
import NavBar from "./NavBar";

// import style
import { makeStyles } from "@material-ui/core/styles";
import "../../App.css";
import "../style/portfolio.css";

const useStyles = makeStyles((theme) => ({
    content: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "calc(652.8px - 48px - 10px)",
        width: "100%",
        margin: "5px",
        backgroundColor: theme.palette.background.paper,
    },

}));

function Informations({ project }) {
    const classes = useStyles();
    const { path } = useRouteMatch();
    return (
        <Container className="form">
            <NavBar />
            <Switch>
                <Route path={`${path}/description`}>
                    <Container className={classes.content}>
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
        </Container>
    );
}

export default Informations;
