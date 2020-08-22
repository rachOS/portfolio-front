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
        backgroundColor: "#F0F0F0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        padding: "12px 15px",
        borderRadius: "0px 0px 10px 0px",
    },
    icon: {
        width: "64px",
        height: "64px",
        color: "rgb(96,175,231)",
    },
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
            <Typography>Design et développement par Grégory Chamekh</Typography>
        </Paper>
    );
};

// export component
export default Footer;
