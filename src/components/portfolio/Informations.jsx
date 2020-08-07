import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Route, Switch, useRouteMatch, useParams } from "react-router-dom";
import { Card } from "@material-ui/core";

// import components
import Description from "./Description";
import Features from "./Features";
import Share from "./Share";
import Stacks from "./Stacks";
import Team from "./Team";
import NavBar from "./NavBar";
import Screenshot from "./Screenshot";

// import data

// import style
import "../../App.css";
import "../style/portfolio.css";

function Informations({ project, projects }) {
    const { path, url } = useRouteMatch();
    /* const { id } = useParams();
    const { path, url } = useRouteMatch();
    const [project, setProject] = useState([{}]);

    const getOneProject = (idProject) => {
        const projectURL = `${process.env.REACT_APP_HOST}/projects/${idProject}`;
        Axios.get(projectURL)
            .then((response) => response.data)
            .then((data) => setProject(data[0]));
    };

    useEffect(() => {
        getOneProject(id);
    }, [id, oneProject]);

    console.log("ONE", oneProject);
 */
    return (
        <Card className="form">
            <NavBar />
            {/* <Switch>
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
            </Switch> */}
        </Card>
    );
}

export default Informations;
