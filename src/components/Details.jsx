// import core
import React from "react";

// import Components
import Contact from "./Contact";
import Cv from "./CV";
import Availability from "./Availability";

// import Material UI
import { Card, makeStyles, Paper } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    root: {
        gridArea: "main",
        display: "grid",
        gridTemplateColumns: "1.5fr 1fr 1fr",
        gridTemplateRows: "1fr 1fr 1.2fr",
        gridTemplateAreas:
            ' "cv infos infos" \
        "cv  infos infos" \
        "cv  infos infos"  ',
        height: "100%",
        rowGap: "5px",
        columnGap: "5px",
        justifyItems: "stretch",
        alignItems: "stretch",
        padding: "12px",
        borderRadius:"0px",
        backgroundColor: "#fbfbfb",
    },
    form: {
        gridArea: "form",
    },
    infos: {
        gridArea: "infos",
        borderRadius:"0",
        textAlign:"justify",
        fontSize:"unset",
        backgroundColor: "#fbfbfb",
        boxShadow:"none"
    },
    cv: {
        gridArea: "cv",
        display: "flex",
        justifyContent: "center",
        padding: "5%",
        borderRadius:"0",
    },
}));

function Details() {
    const classes = useStyle();

    return (
        <Paper className={classes.root} maxWidth="fluid">
            <Card className={classes.cv}>
                <Cv />
            </Card>
            <Card className={classes.infos}>
                <Availability />
            </Card>
        </Paper>
    );
}

export default Details;
