// import core
import React, { useState } from "react";
import { Link } from "react-router-dom";

// import library
import {
    Document,
    Page,
    StyleSheet,
    View,
    pdfjs,
} from "react-pdf/dist/entry.webpack";
import portrait from "../static/image/avatar/linkedin _avatar.jpeg";

// import Material UI
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Avatar,
    Box,
    Button,
    makeStyles,
    Typography,
} from "@material-ui/core";

//import style
import "./style/left-menu.css";

// import files
import pdf from "../static/CV/Grégory_Chamekh_DéveloppeurWebFullstack-junior-v10b.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const useStyles = makeStyles((theme) => ({
    root: {
        gridArea: "leftMenu",
        display: "flex",
        flexDirection: "column",
        width: "auto",
        maxWidth: "100%",
        height: "auto",
    },
    accordion_container: {
        display: "grid",
        alignContent: "center",
        justifyContent: "space-beetween",
        height: "100%",
        backgroundColor: "#fbfbfb",
    },
    accordion_summary: {
        display: "flex",
        flexWrap: "wrap",
    },
    large: {
        width: "30%",
        height: "auto",
        margin: " 12px 0px",
    },
    accordion_details_about: {
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: "transparent",
    },
    accordion_details_cv: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    text_shadow: {
        fontFamily: "'Sora', sans-serif",
        fontWeight: "100",
        textAlign: "center",
        width: "100%",
        fontSize: "41px",
        color: "#888888",
    },
    bio: {
        fontSize: "0.9rem",
    },
    bio_detail: {
        fontSize: "0.9rem",
        margin: " 12px 0px",
    },
}));

const LeftContent = () => {
    const classes = useStyles();
    const [numPages, setNumPages] = useState(null);
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };
    const onLoadError = (error) => {
        return error.message;
    };
    return (
        <Box className={`${classes.root}`}>
            <Accordion
                square
                className={[classes.accordion_container, classes.accordion_top]}
            >
                <AccordionSummary>
                    <Typography variant="h2" className={classes.text_shadow}>
                        A propos
                    </Typography>

                    <Button>plus d'infos</Button>
                </AccordionSummary>
                <AccordionDetails className={classes.accordion_details_about}>
                    <Typography className={classes.bio}>
                        <Avatar
                            className={classes.large}
                            variant="rounded"
                            alt="Grégory chamekh"
                            src={portrait}
                        />
                        Grégory Chamekh, développeur web fullstacks ReactJS /
                        NodeJS, ambassadeur Wild Code School.
                    </Typography>
                    <Typography
                        className={classes.bio_detail}
                        variant="caption"
                        gutterBottom
                    >
                        Touche à tout et bienveillant, ces deux qualités me
                        permettent de m'adapater facilement. De nature curieux
                        et observateur, le soucis du détails et l'optimisation
                        me fascinent. En effet en dehors du développement web,
                        je pratique la photographie, la musique assistée par ordinateur,
                        des plans de nutrition  ... Le point commun entre ces
                        activités se rejoint dans l'informatique qui est pour
                        moi une passion de longue date. Depuis mars 2020 j'ai eu
                        la chance d'effectuer une reconvertion professionnelle
                        dans le développement web et ce nouveau métier me permet
                        de m'épanouir complètement.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion square className={classes.accordion_container}>
                <AccordionSummary className={classes.accordion_summary}>
                    <Typography className={classes.text_shadow} variant="h2">
                        C.V.
                    </Typography>
                    <Button classes="">Afficher</Button>
                </AccordionSummary>
                <AccordionDetails className={classes.accordion_details_cv}>
                    <Typography variant="body2" gutterBottom>
                        <Document
                            file={pdf}
                            onLoadSuccess={onDocumentLoadSuccess}
                            onLoadError={onLoadError}
                        >
                            <Page pageNumber={1} height="300" />
                        </Document>
                    </Typography>
                    <Link to={pdf} target="__blank" download>
                        <Button>Télécharger</Button>
                    </Link>
                </AccordionDetails>
            </Accordion>
            <Accordion
                square
                className={[
                    classes.accordion_container,
                ]}
            >
                <AccordionSummary>
                    <Typography className={classes.text_shadow} variant="h2">
                        Dispos
                    </Typography>
                    <Button>Plus d'infos</Button>
                </AccordionSummary>
                <AccordionDetails>
                    Je suis actuellement en recherche de stage de fin d'études
                    afin de pouvoir monter en compétences. Aussi, ce stage
                    pourra me servir comme support pour du passage du titre
                    professionnel DWWM. Je suis également ouvert à une prise de
                    poste pour un investissement et une évolution de carrière au
                    sein de votre entreprise.
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default LeftContent;
