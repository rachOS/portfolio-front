// import core
import React, { useState, useEffect } from "react";
import Axios from "axios";

// import library
import { Form } from "react-advanced-form";

// import style
import "../responsive.css"

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
        const sendURL = `${process.env.REACT_APP_HOST}/contact`;
        const formDatas = user;
        Axios.post(sendURL, formDatas);
        onSubmit();
        handleReset();
    };

    return (
        <Form ref={(form) => (form = form)} onReset={() => handleReset()}>
            <h2>Me contacter</h2>
            <div>
                <input
                    id="fullname"
                    label="Nom et prénom"
                    name="fullname"
                    type="text"
                    value={user.fullname}
                    onChange={(event) => handleChange(event)}
                    required
                />
            </div>
            <div>
                <input
                    id="user_email"
                    label="email"
                    name="user_email"
                    type="email"
                    value={user.user_email}
                    onChange={(event) => handleChange(event)}
                    placeholder="mon@email.com"
                    required
                />
            </div>
            <div>
                <input
                    id="subject"
                    label="sujet"
                    name="subject"
                    type="text"
                    value={user.subject}
                    onChange={(event) => handleChange(event)}
                />
            </div>
            <div>
                <input
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
            </div>
            <button
                component="submit"
                onClick={(event) => handleSubmit(event)}
                onSubmit={(event) => handleReset(event)}
            >
                Envoyer
            </button>
        </Form>
    );
}

export default Contact;
