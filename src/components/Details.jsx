import React, { useState, useEffect } from "react";
import Axios from "axios";
import {
    Paper,
    Box,
    Card,
    CardContent,
    Button,
    CardActions,
} from "@material-ui/core";

// import components

// import data

// import style
import "../App.css";
import "./style/details.css";

function Details() {
    const [cv, setCv] = useState();

    const getCV = () => {
        const cvURL = `${process.env.REACT_APP_HOST}/infos/download`;
        Axios.get(cvURL).then((response) => console.log("RES", response));
    };

    return (
        <Box className="main">
            <Paper className="details-container">
                <Card className="cv">
                    CV
                    <CardActions>
                        <Button onClick={() => getCV()}>Télécharger</Button>
                    </CardActions>
                </Card>
                <Card className="infos">Disponibilités et infos</Card>
                <Card className="form">Une question?</Card>
            </Paper>
        </Box>
    );
}

export default Details;
