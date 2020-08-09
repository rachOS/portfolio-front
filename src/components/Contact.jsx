import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Form, Field } from "react-final-form";
import {
    Paper,
    Box,
    Card,
    InputLabel,
    CardContent,
    Button,
    TextField,
    CardActions,
    Typography,
} from "@material-ui/core";
// import components

// import data

// import style
import "../App.css";
import "./style/contact.css";

function Contact() {
    const [value, setValue] = useState({
        user_email: "mon@email.com",
        subject: "coucou",
        text: "lorem ipsum",
    });

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const onSubmit = async (values) => {
        await sleep(300);
        window.alert(
            "Je vous remercie pour votre message et j'y répondrai dès que possible"
        );
    };

    const handleChange = (event) => {
        event.preventDefault();
        console.log("VALUE TARGET", event.target.value);
    };
    const handleSubmit = () => {
        const sendURL = `${process.env.REACT_APP_HOST}/contact`;
        const formDatas = value;
        Axios.post(sendURL, formDatas);
    };
    return (
        <Card className="main contact">
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, handleChange }) => (
                    <form method="POST" className="contact-container">
                        <Typography variant="h1">Contactez moi!</Typography>
                        <InputLabel>Email</InputLabel>
                        <Field
                            name="user_email"
                            component="input"
                            type="email"
                            value={handleChange}
                            placeholder="mon@email.com"
                        />
                        <InputLabel>Nom complet</InputLabel>
                        <Field
                            name="Nom complet"
                            component="input"
                            type="text"
                            placeholder="Mr John DOE"
                        />
                        <InputLabel>Message</InputLabel>
                        <Field
                            name="Message"
                            component="input"
                            type="textarea"
                            placeholder=""
                        />
                        <Button
                            component="submit"
                            onClick={() => handleSubmit()}
                        >
                            Envoyer
                        </Button>
                    </form>
                )}
            />
        </Card>
    );
}

export default Contact;
