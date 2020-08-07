import React from "react";
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
    return (
        <Box className="main">
            <Paper className="details-container">
                <Card className="cv">
                    CV
                    <CardActions>
                        <Button>Télécharger</Button>
                    </CardActions>
                </Card>
                <Card className="infos">Disponibilités et infos</Card>
                <Card className="form">Une question?</Card>
            </Paper>
        </Box>
    );
}

export default Details;
