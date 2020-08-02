import React, { useState, useEffect } from "react";
import {
    Link,
    Switch,
    Route,
    useRouteMatch,
    useParams,
} from "react-router-dom";
import Axios from "axios";

// import Material UI
import {
    Paper,
    IconButton,
    Box,
    Tabs,
    Tab,
    Card,
    CardContent,
    MobileStepper,
    Typography,
    Avatar,
} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import AvatarGroup from "@material-ui/lab/AvatarGroup";

// import components
import Description from "./portfolio/Description";
import Informations from "./portfolio/Informations";
import Screenshot from "./portfolio/Screenshot";

// import style
import "./style/portfolio.css";

function Portfolio() {
    const { id } = useParams();
    let { path, url } = useRouteMatch();

    const [projects, setProjects] = useState([{}]);
    const [project, setProject] = useState([{}]);

    const getProjects = () => {
        const projectsURL = `${process.env.REACT_APP_HOST}/projects`;
        Axios.get(projectsURL)
            .then((response) => response.data)
            .then((data) => setProjects(data));
    };

    useEffect(() => {
        getProjects();
    }, []);

     const getProject = (idProject) => {
        const projectsURL = `${process.env.REACT_APP_HOST}/projects/${idProject}`;
        Axios.get(projectsURL)
            .then((response) => response.data)
            .then((data) => setProject(data));
    };

    useEffect(() => {
        getProject(id);
    }, [id]);

    console.log("PROJECT", project);

    const avatar = projects.map((project) => (
        <Avatar variant="square" alt={project.name} src="#">
            <Link to={`${url}/${project.id}`}>{project.name}</Link>
        </Avatar>
    ));

    return (
        <Card className="main-content">
            <Paper className="portfolio-container">
                <Card className="carousel">
                    <IconButton>
                        <ArrowBackIosIcon />{" "}
                    </IconButton>
                    <AvatarGroup id="avatargroup1">{avatar}</AvatarGroup>
                    <IconButton>
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Card>
                <Card className="preview">
                    <Switch>
                        <Route path={`${path}/:id`}>
                            {/* passer projectID en props */}
                            <Informations projects={projects} />
                        </Route>
                    </Switch>
                </Card>
            </Paper>
        </Card>
    );
}

export default Portfolio;
