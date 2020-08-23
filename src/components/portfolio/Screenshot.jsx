// import core
import React from "react";

// import Material UI
import { Avatar, Box, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    root: {
        gridArea: "screenshot",
        display: "flex",
        alignItems: "center",
        padding: "6px",
    },
    screenshot: {
        width: "100%",
        height:"auto",
        boxShadow:
            "0px 2px 1px -1px rgba(0,0,0,0.2), \
        0px 1px 1px 0px rgba(0,0,0,0.14), \
        0px 1px 3px 0px rgba(0,0,0,0.12)",
    },
}));
function Screenshot({ project }) {
    const classes = useStyle();
    return (
        <Box className={classes.root} component="fluid">
            <Avatar
                variant="square"
                className={classes.screenshot}
                src={`${process.env.REACT_APP_HOST}/latest/${project.id}`}
                alt={`screenshot ${project.name} : ${project.id} `}
            />
        </Box>
    );
}

export default Screenshot;
