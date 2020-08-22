// import library
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import components
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Details from "./components/Details";
import Contact from "./components/Contact";
import Header from "./components/Header";
import LeftContent from "./components/LeftContent";
import Footer from "./components/Footer";
import Project from "./components/portfolio/Project";

// import Material Ui
import { Container, CssBaseline, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    root: {
        height: "100vh",
        width: "auto",
        display: "grid",
        gridTemplateColumns: "0.7fr 1fr 1fr 1fr 1fr ",
        gridTemplateRows: "0.5fr 1fr 1fr 1fr 0.5fr",
        gridTemplateAreas:
            '  "leftMenu header header header header" \
            "leftMenu main main main main" \
            "leftMenu main main main main" \
            "leftMenu main main main main" \
            "leftMenu footer footer footer footer"',
        rowGap: "12px",
        columnGap: "12px",
        padding: "12px",
        margin: "0 auto",
        backgroundColor: "#60afe7",
    },
}));

function App() {
    const classes = useStyle();
    const [projects, setProjects] = useState([{}]);
    const [lastProject, setLastProject] = useState([{}]);

    const getProjects = () => {
        const projectsURL = `${process.env.REACT_APP_HOST}/projects?sort=true`;
        Axios.get(projectsURL)
            .then((response) => response.data)
            .then((data) => setProjects(data));
    };
    useEffect(() => {
        getProjects();
    }, []);

    const getLastProjectByDate = () => {
        setLastProject(projects[0]);
    };
    useEffect(() => {
        getLastProjectByDate();
    }, [projects]);

    return (
        <Router>
            <Container className={classes.root} maxWidth="fluid">
                <CssBaseline>
                    <LeftContent />
                    <Header lastProject={lastProject} />
                    <Switch>
                        <Route exact path="/">
                            <Home projects={projects} />
                        </Route>
                        <Route path="/portfolio/:lastProject">
                            <Portfolio />
                            <Route path="/portfolio/:id">
                                <Project projects={projects} />
                            </Route>
                        </Route>
                        <Route path="/details" component={Details} />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                    <Footer className="footer" />
                </CssBaseline>
            </Container>
        </Router>
    );
}

export default App;
