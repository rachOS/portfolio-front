import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Card } from "@material-ui/core";

// import components
import Description from "./Description";
import Features from "./Features";
import Share from "./Share";
import Stacks from "./Stacks";
import Team from "./Team";
import NavBar from "./NavBar";

// import style
import "../../App.css";
import "../style/portfolio.css";

function Informations({ project }) {
    const { path } = useRouteMatch();
    return (
        <Card className="form">
            <NavBar />
            {
                <Switch>
                    <Route path={`${path}/description`}>
                        <Description
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
                    <Route path={`${path}/share`}>
                        <Share project={project} />
                    </Route>
                </Switch>
            }
        </Card>
    );
}

export default Informations;
