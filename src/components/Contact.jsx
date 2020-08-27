// import core
import React, { useState, useEffect } from "react";
import Axios from "axios";

// import library
import { Form } from "react-advanced-form";

// import Material UI
import {
    Box,
    Button,
    makeStyles,
    Paper,
    TextField,
    Typography,
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    root: {
        gridArea: "main",
        borderRadius: "0px",
        backgroundColor: "#fbfbfb",
    },
    title: {
        gridArea: "title",
        font: "5em arial, sans-serif",
        fontFamily: "'Poiret One', cursive",
        color: "transparent",
        textShadow:
            "3px 3px 0px #e0e0e0, \
        3.7px 3.4px 3px rgb(255, 255, 255), \
        4.1px 0.9px 1.5px rgb(77, 77, 77), \
        5.1px 0.5px 0.3px rgb(255,255,255)",
        letterSpacing: "-1px",
        margin: "0",
    },
    form: {
        height: "100%",
        padding: "12px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    text: {
        fontFamily: "'Sora', sans-serif",
        fontWeight: "100",
        gridArea: "text",
        height: "30vh",
        width: "70vh",
        border: "none",
        borderRadius: "4px",
        background: "#f6f6f6",
        boxShadow: " inset 0px 4px 5px #cfcfcf, inset -5px -5px 0px #fcfcfc",
    },
    label: {
        fontFamily: "'Sora', sans-serif",
        fontWeight: "400",
        margin: "12px",
    },
    input: {
        fontFamily: "'Sora', sans-serif",
        fontWeight: "100",
        gridArea: "subject",
        height: "5vh",
        width: "21vh",
        border: "none",
        borderRadius: "1px",
        background: "#f6f6f6",
        boxShadow: " inset 0px 4px 5px #cfcfcf, inset -5px -5px 0px #fcfcfc",
    },
    button: {
        gridArea: "button",
    },
}));

function Contact() {
    const classes = useStyle();

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
        const sendURL = `${process.env.REACT_APP_HOST}/contact`;
        const formDatas = user;
        Axios.post(sendURL, formDatas);
        onSubmit();
        handleReset();
    };

    return (
        <Paper className={classes.root}>
            <Form
                className={classes.form}
                ref={(form) => (form = form)}
                onReset={() => handleReset()}
            >
                <Typography className={classes.title} variant="h2">
                    Me contacter
                </Typography>
                <Box>
                    <TextField
                        className={classes.label}
                        id="fullname"
                        label="Nom et prénom"
                        name="fullname"
                        type="text"
                        value={user.fullname}
                        onChange={(event) => handleChange(event)}
                        required
                    />
                </Box>
                <Box>
                    <TextField
                        className={classes.label}
                        id="user_email"
                        label="email"
                        name="user_email"
                        type="email"
                        value={user.user_email}
                        onChange={(event) => handleChange(event)}
                        placeholder="mon@email.com"
                        required
                    />
                </Box>
                <Box>
                    <TextField
                        className={classes.label}
                        id="subject"
                        label="sujet"
                        name="subject"
                        type="text"
                        value={user.subject}
                        onChange={(event) => handleChange(event)}
                    />
                </Box>
                <Box>
                    <TextField
                        className={[classes.label]}
                        id="text"
                        label="Message"
                        name="text"
                        type="textarea"
                        value={user.text}
                        onChange={(event) => handleChange(event)}
                        variant="outlined"
                        multiline
                        rows={6}
                        required
                    />
                </Box>
                <Button
                    className={classes.button}
                    component="submit"
                    onClick={(event) => handleSubmit(event)}
                    onSubmit={(event) => handleReset(event)}
                >
                    Envoyer
                </Button>
            </Form>
        </Paper>
    );
}

export default Contact;
