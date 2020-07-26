// import library
import React from "react";
import { Paper, Typography } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

// import style
import "../App.css";

// init component
const Footer = () => {
    return (
        <Paper className="footer">
            <InstagramIcon />
            <LinkedInIcon />
            <GitHubIcon />
            <Typography>Design et développement par Grégory Chamekh</Typography>
        </Paper>
    );
};

// export component
export default Footer;
