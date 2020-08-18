// import core
import React from "react";

// import Components
import Cv from "./CV";

// import Material UI
import { Card, CardContent, makeStyles, Paper } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    root: {
        gridArea: "main",
        display: "grid",
        ggridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
        ggridTemplateRows: " 1fr 1fr 1fr 1fr",
        gridTemplateAreas:
            ' "cv cv cv infos infos" \
        "cv cv cv infos infos" \
        "cv cv cv form form" \
        "cv cv cv form form"',
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
    },
}));

function Details() {
    const classes = useStyle();

    return (
        <Paper className={classes.root} maxWidth="fluid">
            <Card className={classes.cv}>
                <CardContent>
                    <Cv />
                </CardContent>
            </Card>
            <Card className={classes.infos}>Disponibilités et infos</Card>
            <Card className={classes.form}>Une question?</Card>
        </Paper>
    );
}

export default Details;
