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
import MainContent from "./components/MainContent";
import Portfolio from "./components/Portfolio";
import Details from "./components/Details";
import Contact from "./components/Contact";
import Header from "./components/Header";
import LeftContent from "./components/LeftContent";
import Footer from "./components/Footer";
import Screenshot from "./components/portfolio/Screenshot";
import Informations from "./components/portfolio/Informations";

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
                        <Route exact path="/" component={MainContent} />
                        <Route path="/portfolio">
                            <Portfolio />
                            <Route
                                path={`/portfolio/:id`}
                                component={Screenshot}
                            />
                            <Route
                                path={`/portfolio/:id`}
                                component={Informations}
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
