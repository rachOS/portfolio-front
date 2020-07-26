import React from "react";
import {
    Paper,
    Card,
    CardContent,
    Button,
    CardActions,
    Typography,
} from "@material-ui/core";
// import components

// import data

// import style
import "../App.css";
import "./style/contact.css";

function Contact() {
    return (
        <Card className="main-content contact">
            <Paper className="contact-container">
                <CardContent className="title">
                    <Typography variant="h1">Contactez moi!</Typography>
                </CardContent>
                <CardContent className="email">
                    <Typography variant="">Email</Typography>
                </CardContent>
                <CardContent className="phone">
                    <Typography  variant="">
                        Tel
                    </Typography>
                </CardContent>
                <CardContent className="text">
                    <Typography  variant="">
                        Texte
                    </Typography>
                </CardContent>
            </Paper>
        </Card>
    );
}

export default Contact;
