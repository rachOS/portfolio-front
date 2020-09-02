// import core
import React, { useState, useEffect } from "react";
import Axios from "axios";

// import library
import { Form } from "react-advanced-form";

// import style
import "../responsive.css";

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
        <section className="test">
            <Form ref={(form) => (form = form)} onReset={() => handleReset()}>
                <h2>Me contacter</h2>
                <fieldset>
                    <legend>Nom et prénom</legend>
                    <label for="fullname" />
                    <input
                        id="fullname"
                        type="text"
                        name="fullname"
                        value={user.fullname}
                        onChange={(event) => handleChange(event)}
                        required
                    />
                </fieldset>
                <fieldset>
                    <legend>Email</legend>
                    <label for="fullname" />
                    <input
                        id="user_email"
                        type="email"
                        name="user_email"
                        value={user.user_email}
                        onChange={(event) => handleChange(event)}
                        placeholder="mon@email.com"
                        required
                    />
                </fieldset>
                <fieldset>
                    <legend>Sujet</legend>
                    <label for="fullname" />
                    <input
                        id="subject"
                        type="text"
                        name="subject"
                        value={user.subject}
                        onChange={(event) => handleChange(event)}
                    />
                </fieldset>
                <fieldset>
                    <legend>Message</legend>
                    <label for="fullname" />
                    <textarea
                        id="text"
                        type="textarea"
                        name="text"
                        value={user.text}
                        onChange={(event) => handleChange(event)}
                        required
                        cols="26"
                        maxLength="1000"
                        minLength="100"
                    />
                </fieldset>
                <button
                    component="submit"
                    onClick={(event) => handleSubmit(event)}
                    onSubmit={(event) => handleReset(event)}
                >
                    Envoyer
                </button>
            </Form>
        </section>
    );
}

export default Contact;
