import React, { useState, useEffect } from "react";
import { Link, Switch, Route, useRouteMatch, useParams } from "react-router-dom";
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
import Screenshot from "./portfolio/Screenshot";

// import style
import "./style/portfolio.css";

function Portfolio() {
    let { path, url } = useRouteMatch();
    const {id} = useParams()
    const [projects, setProjects] = useState([{}]);
    const getProjects = () => {
        const url = `${process.env.REACT_APP_HOST}/projects`;
        Axios.get(url)
            .then((response) => response.data)
            .then((data) => setProjects(data));
    };
    useEffect(() => {
        getProjects();
    }, []);
    console.log("project", projects);

    const avatar = projects.map((project) => (
        <Avatar variant="square" alt={project.name} src="#">
            <Link to={`${url}/${project.id}`}>{project.name}</Link>
        </Avatar>
    ));

    return (
        <Card className=" main-content ">
            <Paper className="portfolio-container">
                <Card className="carousel">
                    <IconButton>
                        <ArrowBackIosIcon />{" "}
                    </IconButton>
                    <AvatarGroup max={10} id="avatargroup1">
                        {avatar}
                    </AvatarGroup>
                    <IconButton>
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Card>
                <Card className="preview">
                    <Switch>
                        <Route path={`${path}/:id`}>
                        {/* faire une route dans le back pour recup url pour un projet */}
                            <Screenshot screen="envoyer la props"/>
                        </Route>
                    </Switch>
                </Card>
                <Card className="form">
                    <Tabs>
                        <Tab label="Description" />
                        <Tab label="L'équipe" />
                        <Tab label="Les stacks" />
                        <Tab label="Les fontionnalités" />
                        <Tab label="Le partage" />
                    </Tabs>
                </Card>
            </Paper>
        </Card>
    );
}

export default Portfolio;
