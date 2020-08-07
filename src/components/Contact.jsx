import React from "react";
import {
    Paper,
    Box,
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
        <Box className="main contact">
            <Paper className="contact-container">
                <Card className="title">
                    <Typography variant="h1">Contactez moi!</Typography>
                </Card>
                <Card className="email">
                    <Typography variant="">Email</Typography>
                </Card>
                <Card className="phone">
                    <Typography variant="">Tel</Typography>
                </Card>
                <Card className="text">
                    <Typography variant="">Texte</Typography>
                </Card>
            </Paper>
        </Box>
    );
}

export default Contact;
