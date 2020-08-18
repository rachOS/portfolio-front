// import core
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

// import Material UI
import { Container, makeStyles, Link, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    content: {
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "calc(652.8px - 48px - 10px)",
        width: "100%",
        margin: "5px",
        backgroundColor: theme.palette.background.paper,
    },
}));

function Description({ projectName, url }) {
    const classes = useStyles();

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
        <Container>
            <Typography variant="h3">{projectName}</Typography>
            <Typography
                paragraph
                variant="body1"
                dangerouslySetInnerHTML={{ __html: checkDescription }}
            />
            {url ? (
                <Link href={url}> Lien du site</Link>
            ) : (
                "site en cours de déploiement"
            )}
        </Container>
    );
}

export default Description;
