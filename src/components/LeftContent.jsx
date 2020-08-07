// import library
import React from "react";
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

// init component
const LeftContent = () => {
    return (
        <Box className="left-menu accordions">
            <Accordion>
                <AccordionSummary>
                    <Avatar
                        object
                        alt="Grégory chamekh"
                        src="public/static/linkedin _avatar.jpeg"
                    />
                    <Typography variant="subtitle2">
                        Bonjour, je suis développeur web fullstack junior
                        ReactJS / NodeJS. J’ai 43 ans et j’habite à Saint
                        Sulpice et Cameyrac à 15 km de Bordeaux.
                    </Typography>
                    <Button>plus d'infos</Button>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="caption" gutterBottom>
                        Après un long parcours riche et atypique dans des
                        secteurs comme l’agriculture, la restauration, l’art
                        graphique, la photographie...et enfin un poste d'agent
                        de quai chez Envie 2E (entreprise d'insertion
                        professionnelle), j'ai eu la formidable opportunité de
                        mettre en place un projet professionnel de développeur
                        web fullstack. Cela m’a permis par la suite d’ intégrer
                        la Wild Code School sur le campus de Bordeaux et de
                        compter parmi les 15 % de candidatures retenues . Peu
                        après le début de la formation j’ai choisis le cursus de
                        développeur web fullstack ReactJS / NodeJS. Actuellement
                        en fin de formation, les expériences vécues et réalisées
                        au cours de ces 4 mois intensifs m’ont confirmés l’envie
                        d’en faire mon métier et m’ont appris énormément de
                        choses grâce aux méthodes SCRUM et Agile, mais aussi aux
                        interaction et à l'entraide omniprésente dans le groupe.
                        Je peux enfin allier passion et travail et m'épanouir
                        complètement. Il me reste une dernière ligne droite et
                        je serai disponible pour une prise de poste, et ce à
                        partir du du 3 août 2020. Aussi je suis très motivé pour
                        rejoindre une startup ou une ESN proche de chez moi sans
                        préférence de secteurs du moment que nous partageons les
                        même valeurs. En effet, tant que le projet est innovant,
                        utile, éthique ou raisonné vous pouvez être sur et
                        certain que je serai pleinement investi dans celui-ci.
                        Ceci dit ma curiosité fait que je trouve plein de
                        projets intéressants et mon professionnalisme fera que
                        je peux en réaliser à votre convenance. Par exemple des
                        projets comme https://getasound.com/ me conviendraient à
                        merveille. #teletravail #teleworking #scrum #agile
                        #trello #javascript #fullstack #reactjs #nodejs #redux
                        #virtualDOM #git #versionning #linux #unix #html #css
                        #flexbox #seo #optimisation #bienveillance
                        #ecoresponsable #autonome #cleancode #veilletechno
                        #dokku #sql #mysql #bootstrap #materialUi #Sass #hooks
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary>
                    <Typography variant="h1">C.V.</Typography>
                    <Button classes="">Afficher</Button>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body2" gutterBottom>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat, et, ipsum dignissimos iusto nam laborum beatae
                        eius, nisi mollitia illum libero eos. Eveniet quae
                        veniam assumenda consequatur, aliquam eligendi? Minus?
                    </Typography>
                    <Button>Télécharger</Button>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary>
                    <Typography variant="h1">Dispo</Typography>
                    <Typography variant="subtitle2">
                        Disponible immédiatement
                    </Typography>
                    <Button>Plus d'infos</Button>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi optio pariatur eum alias necessitatibus molestias
                    reiciendis? Error dolore nam, ipsam distinctio adipisci,
                    iusto sit totam fuga saepe illum deserunt iure!
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

// export component
export default LeftContent;
