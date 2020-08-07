import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Route, Switch, useRouteMatch, useParams } from "react-router-dom";

// import Material UI Components
import {
    Container,
    Card,
    List,
    ListItem,
    ListItemIcon,
    ListItemAvatar,
    ListSubheader,
    ListItemText,
    Link,
    Avatar,
    Box,
    Typography,
    CardContent,
    Divider,
} from "@material-ui/core";

// import Material UI icons
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";

// import components

// import data

// import style
import "../style/portfolio.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "no_wrap",
        width: "100%",
        maxWidth: "auto",
        backgroundColor: theme.palette.background.paper,
    },
    listItemsText: {
        display: "inline",
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));
function Team() {
    const classes = useStyles();

    const { id } = useParams();
    const { path, url } = useRouteMatch();
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
        <List component="nav">
            <ListItem>
                <ListItemAvatar>
                    <Avatar
                        alt={(developper.firstname, developper.ladtname)}
                        src="/static/images/avatar/1.jpg"
                    />
                </ListItemAvatar>
                <ListItemText
                    primary="Infos"
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.listItemsText}
                                color="textPrimary"
                            >
                                {developper.firstname} {developper.lastname}
                            </Typography>
                            <Typography>
                                {developper.biography}{" "}
                                {developper.available
                                    ? "disponible actuellement"
                                    : `disponible à partir du ${developper.availability_date}`}{" "}
                                <ListItemIcon>
                                    <Link href={developper.email}>
                                        <EmailIcon />
                                    </Link>
                                </ListItemIcon>
                                <ListItemIcon>
                                    <Link href={developper.linkedIn}>
                                        <LinkedInIcon />
                                    </Link>
                                </ListItemIcon>
                                <ListItemIcon>
                                    <Link href={developper.github}>
                                        <GitHubIcon />
                                    </Link>
                                </ListItemIcon>
                                <ListItemIcon>
                                    <Link href={developper.facebook}>
                                        <FacebookIcon />
                                    </Link>
                                </ListItemIcon>
                                <ListItemIcon>
                                    <Link href={developper.medium}>Medium</Link>
                                </ListItemIcon>
                                <ListItemIcon>
                                    <Link href={developper.stack_overflow}>
                                        Stack Overflow
                                    </Link>
                                </ListItemIcon>
                                <ListItemIcon>
                                    <Link href={developper.website}>
                                        website
                                    </Link>
                                </ListItemIcon>
                            </Typography>
                            <Divider component="li" />
                        </React.Fragment>
                    }
                />
            </ListItem>
        </List>
    ));
    return (
        <Card>
            <CardContent>
                <Typography>
                    Ces {nbrOfDevsByTeam.Nbr_devs} développeurs.ses ont réalisés le
                    projet {nbrOfDevsByTeam.name} :
                    <List>{listOfDeveloppers}</List>
                </Typography>
            </CardContent>
            <Divider />
        </Card>
    );
}

export default Team;
