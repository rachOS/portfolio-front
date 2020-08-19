import React from "react";
import { Container } from "@material-ui/core";

// import components

// import data

// import style

// import Material UI
import { makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    paragraph: {
        display: "flex",
        width: "auto",
        maxWidth: "fit-content",
        justifyContent: " center",
        padding: "25px",
    },
    title: {
        textAlign:"center",
        padding: "25px",
    },
}));
function Availability() {
    const classes = useStyle();
    return (
        <>
            <Typography className={classes.title} variant="h2">
                Disponibilités et infos
            </Typography>
            <Typography className={classes.paragraph} variant="paragraph">
                Je suis actuellement en recherche de stage de fin d'études afin
                de pouvoir monter en compétences. Aussi, ce stage pourra me
                servir comme support pour du passage du titre professionnel
                DWWM. Je suis également ouvert à une prise de poste pour un
                investissement et une évolution de carrière au sein de votre
                entreprise.
            </Typography>
        </>
    );
}

export default Availability;
