// import library
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline, Box } from "@material-ui/core";

// import components
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Details from "./components/Details";
import Contact from "./components/Contact";
import Header from "./components/Header";
import LeftContent from "./components/LeftContent";
import Footer from "./components/Footer";
import Project from "./components/portfolio/Project";

// import style
import "./App.css";

function App() {
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

    console.log("LAST", projects[0]);

    return (
        <Router>
            <CssBaseline>
                <Box className="container">
                    <LeftContent />
                    <Header lastProject={lastProject} />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/portfolio/:lastProject">
                            <Portfolio />
                            <Route path="/portfolio/:id" component={Project} />
                        </Route>
                        <Route path="/details" component={Details} />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                    <Footer className="footer" />
                </Box>
            </CssBaseline>
        </Router>
    );
}

// export component
export default App;
