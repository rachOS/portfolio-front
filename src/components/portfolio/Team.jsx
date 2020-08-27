import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

// import Material UI Components
import {
    Box,
    Card,
    CardHeader,
    Container,
    Link,
    Typography,
} from "@material-ui/core";

// import Material UI icons
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

// import style
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "5px",
        height: "100%",
    },
    devs: {
        fontFamily: "'Sora', sans-serif",
        letterSpacing: "0.3em",
        margin: "12px",
        fontSize: "1.2em",
        fontWeight: "200",
    },
    cards: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        width: "auto",
        minWidth: "100%",
    },
    card: {
        margin: "5px",
        backgroundColor: "#fbfbfb",
        borderRadius: "1px",
    },
    container_icon: {
        display: "flex",
        justifyContent: "space-evenly",
    },
    icon: {
        color: "#000",
    },
}));
function Team() {
    const classes = useStyles();

    const { id } = useParams();
    const [nbrOfDevsByTeam, setNbrOfDevsByTeam] = useState([{}]);
    const [developpers, setDeveloppers] = useState([{}]);

    const getNbrOfDevsByTeam = (idProject) => {
        const nbrOfDevsURL = `${process.env.REACT_APP_HOST}/projects/${idProject}/total-developpers`;
        Axios.get(nbrOfDevsURL)
            .then((response) => response.data)
            .then((data) => setNbrOfDevsByTeam(data[0]));
    };

    const getDeveloppersInfos = (idProject) => {
        const devsInfosURL = `${process.env.REACT_APP_HOST}/projects/${idProject}/developpers-infos`;
        Axios.get(devsInfosURL)
            .then((response) => response.data)
            .then((data) => setDeveloppers(data));
    };

    useEffect(() => {
        getNbrOfDevsByTeam(id);
        getDeveloppersInfos(id);
    }, [id]);

    const listOfDeveloppers = developpers.map((developper) => (
        <Card className={classes.card}>
            <CardHeader
                title={`${developper.firstname} `}
                subheader={`${developper.lastname} `}
            />
            <Box className={classes.container_icon}>
                <Link href={developper.linkedIn}>
                    <LinkedInIcon className={classes.icon} />
                </Link>
                <Link href={developper.github}>
                    <GitHubIcon className={classes.icon} />
                </Link>
            </Box>
        </Card>
    ));
    return (
        <Container className={classes.root}>
            <Typography className={classes.devs}>
                {nbrOfDevsByTeam.Nbr_devs} développeur.s.ses a.ont réalisé.e.s
                le projet <strong>{nbrOfDevsByTeam.name}</strong> :
            </Typography>
            <Box className={classes.cards}>{listOfDeveloppers}</Box>
        </Container>
    );
}

export default Team;
