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
        height: "100%",
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
    accordion_details_cv: {
        flexWrap: "wrap",
        justifyContent: "center",
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
            <Accordion className={classes.accordion_container}>
                <AccordionSummary>
                    <Typography variant="h2">A propos</Typography>
                    <Avatar
                        className={classes.large}
                        variant="rounded"
                        alt="Grégory chamekh"
                        src={portrait}
                    />
                    <Typography variant="subtitle2">
                        Grégory Chamekh, né le 19 juin 1977 à Talence,
                        développeur web fullstacks ReactJS / NodeJS, ambassadeur
                        Wild Code School.
                    </Typography>
                    <Button>plus d'infos</Button>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="caption" gutterBottom>
                        Touche à tout blablabal
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={classes.accordion_container}>
                <AccordionSummary>
                    <Typography variant="h2">C.V.</Typography>
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
            <Accordion className={classes.accordion_container}>
                <AccordionSummary>
                    <Typography variant="h2">Dispos</Typography>
                    <Typography variant="subtitle2">
                        Je suis disponible immédiatement.
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
