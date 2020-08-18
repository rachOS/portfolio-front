// import library
import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

// import Material UI
import { makeStyles, Paper, Typography } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    root: {
        gridArea: "footer",
    },
}));

const Footer = () => {
    const classes = useStyle();

    return (
        <Paper className={classes.root}>
            <InstagramIcon />
            <LinkedInIcon />
            <GitHubIcon />
            <Typography>Design et développement par Grégory Chamekh</Typography>
        </Paper>
    );
};

// export component
export default Footer;
