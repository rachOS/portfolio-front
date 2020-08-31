// import core
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


// import style
import "./responsive.css";

// import fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

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

    return (
        <Router>
            <div className="main-grid">
                <LeftContent />
                <Header lastProject={lastProject} />
                <main className="main">
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
                </main>
                <Footer className="footer" />
            </div>
        </Router>
    );
}

export default App;
