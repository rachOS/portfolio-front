import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Form } from "react-advanced-form";
import { Card, InputLabel, Button, Typography, Input } from "@material-ui/core";

// import style
import "../App.css";
import "./style/contact.css";

function Contact() {
    const initialUserState = {
        user_email: "",
        fullname: "",
        text: "",
        subject: "",
    };
    const [user, setUser] = useState(initialUserState);
    const [input, setInput] = useState("");

    useEffect(() => {
        setUser(input);
    }, [input]);

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const onSubmit = async (values) => {
        await sleep(300);
        window.alert(
            "Je vous remercie pour votre message et j'y répondrai dès que possible"
        );
    };

    const handleChange = (event) => {
        event.preventDefault();
        const { value, name } = event.target;
        setInput({ ...input, [name]: value });
    };
    const handleReset = () => {
        return setInput(initialUserState);
    };

    const handleSubmit = () => {
        // const sendURL = `${process.env.REACT_APP_HOST}/contact`;
        // const formDatas = user;
        // Axios.post(sendURL, formDatas);
        onSubmit();
        handleReset()
    };

    return (
        <Card className="main contact">
            <Form
                // method="POST"
                ref={(form) => (form = form)}
                className="contact-container"
                onReset={() => handleReset()}
            >
                <Typography variant="h2">Contactez moi!</Typography>
                <InputLabel>Nom complet</InputLabel>
                <input
                    name="fullname"
                    type="text"
                    value={user.fullname}
                    onChange={(event) => handleChange(event)}
                    placeholder="Mr John DOE / Miss Jane DOE"
                />
                <InputLabel>Email</InputLabel>
                <input
                    name="user_email"
                    type="email"
                    value={user.user_email}
                    onChange={(event) => handleChange(event)}
                    placeholder="mon@email.com"
                />
                <InputLabel>Sujet</InputLabel>
                <input
                    name="subject"
                    type="text"
                    value={user.subject}
                    onChange={(event) => handleChange(event)}
                />
                <InputLabel>Message</InputLabel>
                <input
                    name="text"
                    type="textarea"
                    value={user.text}
                    onChange={(event) => handleChange(event)}
                />
                <Button
                    component="submit"
                    onClick={(event) => handleSubmit(event)}
                    onSubmit={(event) => handleReset(event)}
                >
                    Envoyer
                </Button>
            </Form>
        </Card>
    );
}

export default Contact;
