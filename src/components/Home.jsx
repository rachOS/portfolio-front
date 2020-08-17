// import library
import React from "react";
import { Link } from "react-router-dom";
import { Paper, Typography, Card, Box } from "@material-ui/core";
import { Frame, Scroll, Stack } from "framer";

// import style
import "../App.css";
import "./style/home.css";

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
                <Typography className="title" variant="h1">
                    Projets récents
                </Typography>
                {/* <Stack direction="horizontal" alignment="center"> */}
                <Frame
                    backgroundColor={"none"}
                    size={"auto"}
                    center
                    position={"relative"}
                    style={{
                        display: "flex",
                        top: "15%",
                        width: "100%",
                        height: "min-content",
                        justifyContent: "space-between",
                        alignItems: "center",
                        justifySelf:"flex-start"
                    }}
                >
                    {lastProjects.slice(0, 3)}
                </Frame>
                {/* </Stack> */}
            </Paper>
        );
    } catch (error) {
        console.error(error);
    }
}

// export component
export default Home;
