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
        ggridTemplateColumns: "auto",
        ggridTemplateRows: "auto",
        gridTemplateAreas:
            ' "cv cv cv cv infos" \
        "cv cv cv cv infos" \
        "cv cv cv cv infos"  ',
        height: "100%",
        rowGap: "5px",
        columnGap: "5px",
        justifyItems: "stretch",
        alignItems: "stretch",
        padding: "50px",
    },
    form: {
        gridArea: "form",
    },
    infos: {
        gridArea: "infos",
    },
    cv: {
        gridArea: "cv",
        display: "flex",
        justifyContent: "center",
        padding: "5%",
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
            {/* <Card className={classes.form}>
                <Contact />
            </Card> */}
        </Paper>
    );
}

export default Details;
