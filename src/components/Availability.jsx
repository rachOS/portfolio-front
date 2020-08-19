import React from "react";
import { Link } from "react-router-dom";

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
        padding: "1px",
        margin: "20px",
        textAlign: "justify",
    },
    title: {
        textAlign: "center",
        padding: "25px",
    },
    link: {
        padding: "0px 5px",
    },
}));
function Availability() {
    const classes = useStyle();
    return (
        <>
            <Typography className={classes.title} variant="h2">
                Disponibilités et infos
            </Typography>
            <Typography className={classes.paragraph}>
                Je suis actuellement en recherche de stage de fin d'études afin
                de pouvoir monter en compétences. Aussi, ce stage pourra me
                servir comme support pour le passage du titre professionnel
                DWWM.
            </Typography>
            <Typography className={classes.paragraph}>
                Je suis également ouvert à une prise de poste pour un
                investissement et une évolution de carrière au sein de votre
                entreprise.
            </Typography>
            <Typography className={classes.paragraph}>
                D'une reconversion professionnelle en tant develloppeur web
                fullstack, c'est à la Wild Code School de Bordeaux que j'ai
                suivi la formation professionnelle de Développeur Web et Web
                Mobile cursus ReactJS / NodeJS.
            </Typography>
            <Typography className={classes.paragraph}>
                De part mon implication et ma participation active durant cette
                formation, le status d'ambassadeur m'a été proposé, représentant
                les éléves les plus engagés ayant pour but de co-construire la
                communauté. En ce moment je prépare le passage du titre
                professionnel qui aura lieu à la fin de l'année 2020, en
                parallèle avec le développement de quelques projets personnels.
            </Typography>
            <Typography className={classes.paragraph}>
                Par la suite, je compte entreprendre une formation dans un
                domaine qui m'attire depuis quelques temps pour apprendre le
                métier de data analyste. C'est un autre domaine qui m'attire
                depuis longtemps et j'apprécie l'éventuelle complémentarité
                qu'il peut y avoir avec le métier de développeur web.
            </Typography>

            <Typography className={classes.paragraph}>
                Pour toutes autres infos, n' hésitez pas à
                <Link to="/contact" className={classes.link}>
                    {" "}
                    me contacter
                </Link>
            </Typography>
        </>
    );
}

export default Availability;
