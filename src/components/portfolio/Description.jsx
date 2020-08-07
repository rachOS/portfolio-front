import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams, useRouteMatch } from "react-router-dom";
import {
    Box,
    Avatar,
    Paper,
    Typography,
    Card,
    Container,
    Link,
} from "@material-ui/core";

// import components

// import data

// import style
import "../style/portfolio.css";

function Description({ projectName, url }) {
    const { id } = useParams();
    const [description, SetDescription] = useState(null);

    const getDescription = (idProject) => {
        const projectURL = `${process.env.REACT_APP_HOST}/projects/${idProject}/description`;
        Axios.get(projectURL)
            .then((response) => response.data)
            .then((data) => SetDescription(data));
    };
    useEffect(() => {
        getDescription(id);
    }, [id]);

    const checkDescription = description
        ? description
        : "Description du projet";
    return (
        <React.Fragment>
            <Typography variant="h3">{projectName}</Typography>
            <Typography
                paragraph
                variant="body1"
                dangerouslySetInnerHTML={{ __html: checkDescription }}
            />
            <Link href={url}> Lien du site</Link>
        </React.Fragment>
    );
}

export default Description;
