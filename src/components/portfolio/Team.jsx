import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

// import Material UI Components
import {
    Box,
    Card,
    Link,
    Avatar,
    Typography,
    CardContent,
    CardHeader,
    Paper,
    Container,
} from "@material-ui/core";

// import Material UI icons
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";

// import style
import "../style/portfolio.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "start",
        padding: "5px",
    },
    cards: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        width: "auto",
        minWidth: "100%",
    },
    card: {
        margin: "5px",
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
                title={`${developper.firstname} ${developper.lastname}`}
                subheader={
                    developper.available
                        ? "disponible actuellement"
                        : `disponible à partir du ${developper.availability_date}`
                }
                avatar={
                    <Avatar
                        alt={(developper.firstname, developper.lastname)}
                        src="../../static/image/avatar/linkedin _avatar.jpeg"
                    />
                }
            />
            <CardContent>
                <Typography>
                    {developper.biography}{" "}
                    <Link href={developper.email}>
                        <EmailIcon />
                    </Link>
                    <Link href={developper.linkedIn}>
                        <LinkedInIcon />
                    </Link>
                    <Link href={developper.github}>
                        <GitHubIcon />
                    </Link>
                    <Link href={developper.facebook}>
                        <FacebookIcon />
                    </Link>
                    <Link href={developper.medium}>Medium</Link>
                    <Link href={developper.stack_overflow}>Stack Overflow</Link>
                    <Link href={developper.website}>website</Link>
                </Typography>
            </CardContent>
        </Card>
    ));
    return (
        <Container className={classes.root}>
            <Typography>
                Ces {nbrOfDevsByTeam.Nbr_devs} développeurs.ses ont réalisés le
                projet {nbrOfDevsByTeam.name} :
            </Typography>
            <Box className={classes.cards}>{listOfDeveloppers}</Box>
        </Container>
    );
}

export default Team;
