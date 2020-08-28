// import core
import React from "react";
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
        <div>
            <NavBar />
            <Carousel projects={projects} />
            <Switch>
                <Route path={`${path}/description`}>
                    <div>
                        <Description
                            project={project}
                            projectName={project.name}
                            url={project.site_link}
                        />
                    </div>
                </Route>
                <Route path={`${path}/team`}>
                    <div>
                        <Team project={project} />
                    </div>
                </Route>
                <Route path={`${path}/stacks-tools`}>
                    <div>
                        <Stacks project={project} />
                    </div>
                </Route>
                <Route path={`${path}/features`}>
                    <div>
                        <Features project={project} />
                    </div>
                </Route>
            </Switch>
        </div>
    );
}

export default Informations;
