// import library
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import components
import Home from "./components/home/Home";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
    );
}

// export component
export default App;
