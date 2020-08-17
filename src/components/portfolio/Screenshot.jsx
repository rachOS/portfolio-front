// import core
import React from "react";

// import library
import Axios from "axios";

// import Material UI
import { Card, Box } from "@material-ui/core";

// import style
import "../../App.css";
import "../style/portfolio.css";

function Screenshot({ project }) {
    return (
        <Card className="screenshot">
            <img id="screenshot"
                src={`${process.env.REACT_APP_HOST}/latest/${project.id}`}
                alt={`screenshot ${project.name} : ${project.id} `}
            />
        </Card>
    );
}

export default Screenshot;
