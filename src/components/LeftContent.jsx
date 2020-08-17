// import core
import React, { useState } from "react";

// import library
import { Document, Page, pdfjs } from "react-pdf";

// import Material UI
import {
    Paper,
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@material-ui/core";

//import style
import "../App.css";
import "./style/left-menu.css";

// import files
import pdf from "../static/CV/Grégory_Chamekh_DéveloppeurWebFullstack-junior-v10b.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// init component
const LeftContent = () => {
    const [numPages, setNumPages] = useState(null);
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };
    const onLoadError = (error) => {
        return error.message;
    };
    return (
        <Box className="left-menu accordions">
            <Accordion>
                <AccordionSummary>
                    <Typography variant="h2">A propos</Typography>
                    <Avatar
                        object
                        alt="Grégory chamekh"
                        src="public/static/linkedin _avatar.jpeg"
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
                        proposé, représentant les éléves les plus engagés dans
                        le but de co-construire la communauté. En ce moment je
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
            <Accordion>
                <AccordionSummary>
                    <Typography variant="h2">C.V.</Typography>
                    <Button classes="">Afficher</Button>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body2" gutterBottom>
                        <Document
                            className="cv"
                            file={pdf}
                            onLoadSuccess={onDocumentLoadSuccess}
                            onLoadError={onLoadError}
                        >
                            <Page pageNumber={1} />
                        </Document>
                    </Typography>
                </AccordionDetails>
                <Button>Télécharger</Button>
            </Accordion>
            <Accordion>
                <AccordionSummary>
                    <Typography variant="h2">Dispos</Typography>
                    <Typography variant="subtitle2">
                        Je suis disponible immédiatement.
                    </Typography>
                    <Button>Plus d'infos</Button>
                </AccordionSummary>
                <AccordionDetails>
                    Je suis actuellement en recherche d'un stage de fin d'études
                    afin de pouvoir monter en compétences en vue de la
                    préparation du passage du titre professionnel DWWM. Je suis
                    également ouvert à une prise de poste pour un investissement
                    et une évolution de carrière au sein de votre entreprise.
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

// export component
export default LeftContent;
