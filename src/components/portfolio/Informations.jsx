// import core
import React, { Fragment } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

// import components
import Carousel from "./Carousel";
import Description from "./Description";
import Features from "./Features";
import Stacks from "./Stacks";
import Team from "./Team";
import NavBar from "./NavBar";

function Informations({ projects, project }) {
    const { path } = useRouteMatch();
    return (
        <section>
            <Carousel projects={projects} />
            <NavBar />
            <Switch>
                <Route path={`${path}/description`}>
                    <Description
                        project={project}
                        projectName={project.name}
                        url={project.site_link}
                    />
                </Route>
                <Route path={`${path}/team`}>
                    <Team project={project} />
                </Route>
                <Route path={`${path}/stacks-tools`}>
                    <Stacks project={project} />
                </Route>
                <Route path={`${path}/features`}>
                    <Features project={project} />
                </Route>
            </Switch>
        </section>
    );
}

export default Informations;
