// import library
import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

// import Material UI
import { Box, Link, makeStyles, Paper, Typography } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    root: {
        gridArea: "footer",
        backgroundColor: "#fbfbfb",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        padding: "12px 15px",
        borderRadius: "0",
    },
    icon: {
        width: "32px",
        height: "32px",
        color: "#000000",
    },
    text:{
        fontFamily: "'Sora', sans-serif",
        letterSpacing: "0.3em",
        fontWeight: "200",
    }
}));

const Footer = () => {
    const classes = useStyle();

    return (
        <Paper className={classes.root}>
            <Box>
                <Link href="https://www.instagram.com/gregory.rachid.chamekh/">
                    <InstagramIcon className={classes.icon} />
                </Link>
                <Link href="https://www.linkedin.com/in/gregory-chamekh/">
                    <LinkedInIcon className={classes.icon} />
                </Link>
                <Link href="https://github.com/rachOS">
                    <GitHubIcon className={classes.icon} />
                </Link>
            </Box>
            <Typography className={classes.text}>Design et développement par Grégory Chamekh</Typography>
        </Paper>
    );
};

// export component
export default Footer;
