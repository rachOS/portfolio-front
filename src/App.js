// import library
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
} from "react-router-dom";
import { CssBaseline, Card, Paper } from "@material-ui/core";

// import components
import MainContent from "./components/MainContent";
import Portfolio from "./components/Portfolio";
import Details from "./components/Details";
import Contact from "./components/Contact";
import Header from "./components/Header";
import LeftContent from "./components/LeftContent";
import Footer from "./components/Footer";
import Screenshot from "./components/portfolio/Screenshot";

// import style
import "./App.css";
import "./components/style/portfolio.css";
import Informations from "./components/portfolio/Informations";

function App() {
    return (
        <Router>
            <CssBaseline>
                <div container className="container">
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
                </div>
            </CssBaseline>
        </Router>
    );
}

// export component
export default App;
