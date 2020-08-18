// import core
import React from "react";

// import Material UI
import { Card, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    root: {
        gridArea: "screenshot",
        display: "flex",
        alignItems: "center",
        padding: "5%",
        backgroundColor: theme.palette.background.paper,
    },
}));
function Screenshot({ project }) {
    const classes = useStyle();
    return (
        <Card className={classes.root} component="fluid">
            <img
                src={`${process.env.REACT_APP_HOST}/latest/${project.id}`}
                alt={`screenshot ${project.name} : ${project.id} `}
            />
        </Card>
    );
}

export default Screenshot;
