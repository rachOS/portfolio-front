// import core
import React, { useState, useEffect } from "react";

// import library
import { Form } from "react-advanced-form";

// import Material UI
import {
    Box,
    Button,
    InputLabel,
    makeStyles,
    Paper,
    Typography,
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    root: {
        gridArea: "main",
        borderRadius: "0px",
        backgroundColor: "#F0F0F0",
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
        gridArea: "text",
        height: "30vh",
        width: "70vh",
    },
    title: {
        gridArea: "title",
        font: "bold 5rem arial, sans-serif",
        color: "transparent",
        textShadow:
        "3px 3px 0px #e0e0e0, \
        3.7px 3.4px 3px rgb(255, 255, 255), \
        4.1px 0.9px 1.5px rgb(77, 77, 77), \
        5.1px 0.5px 0.3px rgb(255,255,255)",
        letterSpacing: "-1px",
        margin: "0",
    },
    email: {
        gridArea: "email",
    },
    fullname: {
        gridArea: "fullname",
    },
    subject: {
        gridArea: "subject",
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
        // const sendURL = `${process.env.REACT_APP_HOST}/contact`;
        // const formDatas = user;
        // Axios.post(sendURL, formDatas);
        onSubmit();
        handleReset();
    };

    return (
        <Paper className={classes.root}>
            <Form
                // method="POST"
                className={classes.form}
                ref={(form) => (form = form)}
                onReset={() => handleReset()}
            >
                <Typography className={classes.title} variant="h2">
                    Contactez-moi!
                </Typography>
                <Box>
                    <InputLabel>Nom complet</InputLabel>
                    <input
                        className={classes.fullname}
                        name="fullname"
                        type="text"
                        value={user.fullname}
                        onChange={(event) => handleChange(event)}
                        placeholder="Mr John DOE / Miss Jane DOE"
                    />
                </Box>
                <Box>
                    <InputLabel>Email</InputLabel>
                    <input
                        className={classes.email}
                        name="user_email"
                        type="email"
                        value={user.user_email}
                        onChange={(event) => handleChange(event)}
                        placeholder="mon@email.com"
                    />
                </Box>
                <Box>
                    <InputLabel>Sujet</InputLabel>
                    <input
                        className={classes.subject}
                        name="subject"
                        type="text"
                        value={user.subject}
                        onChange={(event) => handleChange(event)}
                    />
                </Box>
                <Box>
                    <InputLabel>Message</InputLabel>
                    <input
                        className={classes.text}
                        name="text"
                        type="textarea"
                        value={user.text}
                        onChange={(event) => handleChange(event)}
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
