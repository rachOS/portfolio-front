// import library
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
} from "react-router-dom";
import { CssBaseline, Card, Paper, Container, Box } from "@material-ui/core";

// import components
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Details from "./components/Details";
import Contact from "./components/Contact";
import Header from "./components/Header";
import LeftContent from "./components/LeftContent";
import Footer from "./components/Footer";
import Screenshot from "./components/portfolio/Screenshot";
import Informations from "./components/portfolio/Informations";
import Project from "./components/portfolio/Project";

// import style
import "./App.css";

function App() {
    return (
        <Router>
            <CssBaseline>
                <Box className="container">
                    <LeftContent />
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/portfolio">
                            <Portfolio />
                            {/* <Route
                                path={`/portfolio/:id`}
                                component={Carousel}
                            /> */}
                            {/* <Route
                                path={`/portfolio/:id`}
                                component={Screenshot}
                            /> */}
                            {/* <Route
                                path={`/portfolio/:id`}
                                component={Informations}
                            /> */}
                            <Route
                                path="/portfolio/:id"
                                component={Project}
                            />
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
