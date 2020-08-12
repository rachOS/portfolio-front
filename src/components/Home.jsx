// import library
import React from "react";
import { Link } from "react-router-dom";
import { Paper, Typography, Card, Box } from "@material-ui/core";

// import style
import "../App.css";
import "./style/maint-content.css";

// init component

function Home({ projects }) {
    try {
        const lastProjects = projects.map((project) => (
            <Card className="content">
                <Link to={`/portfolio/${project.id}/description`}>
                    <img
                        src={`${process.env.REACT_APP_HOST}/latest/${project.id}`}
                        alt={`screenshot ${project.name} : ${project.id} `}
                    />
                </Link>
            </Card>
        ));
        return (
            <Paper className="main main-content preview-container">
                <Typography variant="h1">Projets récents</Typography>
                <Box>{lastProjects.slice(0, 3)}</Box>
            </Paper>
        );
    } catch (error) {
        console.error(error);
    }
}

// export component
export default Home;
