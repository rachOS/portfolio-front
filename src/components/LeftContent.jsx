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
import "../App.css";
import "./style/left-menu.css";

// import files
import pdf from "../static/CV/Grégory_Chamekh_DéveloppeurWebFullstack-junior-v10b.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        width: "auto",
        maxWidth: "100%",
        height: "auto",
    },
    accordion_container: {
        height: "100%",
        border: "1px solid red",
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
// init component
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
        <Box className={`left-menu accordions ${classes.root}`}>
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
                        D'une reconversion professionnelle en tant develloppeur
                        web fullstack, c'est à la Wild Code School de Bordeaux
                        que j'ai suivi la formation professionnelle de
                        Développeur Web et Web Mobile cursus ReactJS / NodeJS.
                        De part mon implication et ma participation active
                        durant cette formation, le status d'ambassadeur m'a été
                        proposé, représentant les éléves les plus engagés ayant
                        pour but de co-construire la communauté. En ce moment je
                        prépare le passage du titre professionnel qui aura lieu
                        à la fin de l'année 2020, en parallèle avec le
                        développement de quelques projets personnels. Par la
                        suite, je compte entreprendre une formation dans un
                        domaine qui m'attire depuis quelques temps pour
                        apprendre le métier de data analyste. C'est un autre
                        domaine qui m'attire depuis longtemps et j'apprécie
                        l'éventuelle complémentarité qu'il peut y avoir avec le
                        métier de développeur web.
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

// export component
export default LeftContent;
