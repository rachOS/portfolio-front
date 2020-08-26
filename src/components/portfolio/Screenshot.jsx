// import core
import React from "react";

// import Material UI
import { Avatar, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    screenshot: {
        margin: "12px",
        alignSelf: "center",
        width: "auto",
        height: "auto",
        maxWidth: "40%",
        display: "flex",
        boxShadow:
            "0px 2px 1px -1px rgba(0,0,0,0.2), \
        0px 1px 1px 0px rgba(0,0,0,0.14), \
        0px 1px 3px 0px rgba(0,0,0,0.12)",
    },
}));
function Screenshot({ project }) {
    const classes = useStyle();
    return (
        <Avatar
            variant="square"
            className={classes.screenshot}
            src={`${process.env.REACT_APP_HOST}/latest/${project.id}`}
            alt={`screenshot ${project.name} : ${project.id} `}
        />
    );
}

export default Screenshot;
