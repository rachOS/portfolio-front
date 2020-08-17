// import core
import React, { useState, useEffect } from "react";

// import Components
import Cv from "./CV";

// import library
import Axios from "axios";

// import Material UI
import { Paper, Box, Card, CardContent } from "@material-ui/core";

// import style
import "../App.css";
import "./style/details.css";

function Details() {
    const [cv, setCv] = useState();

    const getCV = async () => {
        const cvURL = `${process.env.REACT_APP_HOST}/infos/download`;
        await Axios.get(cvURL)
            .then((response) => response.data)
            .then((data) => setCv(data));
    };

    useEffect(() => {
        getCV();
    }, []);

    return (
        <Box className="main">
            <Paper className="details-container">
                <Card className="cv">
                    <CardContent>
                        <Cv />
                    </CardContent>
                </Card>
                <Card className="infos">Disponibilités et infos</Card>
                <Card className="form">Une question?</Card>
            </Paper>
        </Box>
    );
}

export default Details;
