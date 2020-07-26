import React from "react";
import {
    Paper,
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
        <Card className="main-content">
            <Paper className="details-container">
                <CardContent className="cv">
                    CV
                    <CardActions>
                        <Button>Télécharger</Button>
                    </CardActions>
                </CardContent>
                <CardContent className="infos">
                    Disponibilités et infos
                </CardContent>
                <CardContent className="form">Une question?</CardContent>
            </Paper>
        </Card>
    );
}

export default Details;
