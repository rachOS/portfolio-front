// import Core
import React, { Fragment } from "react";

// import library
import { Frame, Scroll, Stack } from "framer";

// import Material UI
import {
    Container,
    Typography,
    Button,
    Box,
    Avatar,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/Inbox";
import PhoneInTalkSharpIcon from "@material-ui/icons/PhoneInTalkSharp";
import EmailSharpIcon from "@material-ui/icons/EmailSharp";
import CakeSharpIcon from "@material-ui/icons/CakeSharp";
// import components

// import data

// import style

function CV() {
    return (
        <Fragment>
            <Scroll height={560} width={"42%"}>
                <Stack
                    height={"100%"}
                    direction="vertical"
                    distribution="space-arround"
                    padding={0}
                >
                    <Frame
                        backgroundColor={"noce"}
                        height={"100%"}
                        width={"100%"}
                    >
                        <Container>
                            <Typography variant="h2" align="center">
                                Développeur web fullstack
                            </Typography>
                            <Typography align="center">
                                JavaScript | ReactJS | NodeJS | Versionning |
                                Clean code | Veille techno | Anglais
                            </Typography>
                        </Container>
                        <Container>
                            <Typography variant="body2" align="left">
                                Communicant / Dynamique / Bienveillant
                            </Typography>
                            <Typography variant="body2" align="left">
                                Motivé / Créatif / Curieux
                            </Typography>
                            <Typography variant="body2" align="left">
                                Polyvalent Rigoureux / Perséverent / Autonome
                            </Typography>
                            <Typography>
                                Grégory Chamekh : 43 ans |
                                <CakeSharpIcon /> né le 19 juin 1977| Bordeaux
                                <PhoneInTalkSharpIcon />
                                06.349.349.63 |
                                <EmailSharpIcon />
                                g.chamekh@e-nautia.com | disponible
                            </Typography>
                            <Avatar />
                        </Container>
                        <Container>
                            <Box>
                                <Typography variant="h3" align="center">
                                    Parcours professionnel
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="subtitle1" align="left">
                                    Développeur web fullstack
                                </Typography>
                                <Typography variant="caption" align="right">
                                    WILD CODE SCHOOL de mars 2020 à juillet 2020
                                </Typography>
                                <Typography paragraph>
                                    <List disablePadding>
                                        <ListItem>
                                            Stacks : JavaScript / ReactJS /
                                            NodeJS / Redux Site
                                        </ListItem>
                                        <ListItem>
                                            e-commerce de vente de cartes
                                            cadeaux en ligne.
                                        </ListItem>{" "}
                                        <ListItem>
                                            Jeu tour par tour multijoueurs.
                                        </ListItem>{" "}
                                        <ListItem>Hackathons.</ListItem>
                                        <ListItem>
                                            Découpage d’une application web en
                                            composants.
                                        </ListItem>
                                        <ListItem>
                                            Création et consommation d’API.
                                            Modélisation de bases de données
                                            (MCD, MLD)
                                        </ListItem>
                                    </List>
                                </Typography>
                            </Box>
                            <Divider />
                            <Box>
                                <Typography variant="subtitle1" align="left">
                                    Photographe
                                </Typography>
                                <Typography variant="caption" align="right">
                                    HANS LUCAS de mars 2019 à ce jour
                                </Typography>
                                <Typography paragraph>
                                    <List disablePadding>
                                        <ListItem>
                                            Edition des métadonnées selon les
                                            normes des métiers de l’information
                                            avec Exiftool en CLI.
                                        </ListItem>
                                        <ListItem>
                                            Prises de vues photographique sur
                                            des sujets de société.
                                        </ListItem>{" "}
                                        <ListItem>
                                            Rédaction d’un tutoriel sur
                                            l’édition des métadonnées pour les
                                            utilisateurs Linux
                                        </ListItem>{" "}
                                    </List>
                                </Typography>
                            </Box>
                            <Divider />
                            <Box>
                                <Typography variant="subtitle1" align="left">
                                    Agent de quai
                                </Typography>
                                <Typography variant="caption" align="right">
                                    ENVIE 2E AQUITAINE de juillet 2018 à février
                                    2020
                                </Typography>
                                <Typography paragraph>
                                    <List disablePadding>
                                        <ListItem>
                                            Elaboration d’un projet
                                            professionnel en tant que
                                            développeur web.
                                        </ListItem>
                                        <ListItem>
                                            Réception de colis postaux, tri
                                            selectif des produits...
                                        </ListItem>
                                    </List>
                                </Typography>
                            </Box>
                        </Container>
                        <Container>
                            <Box>
                                <Typography variant="h3">Formations</Typography>
                            </Box>
                            <Typography>
                                Méthodologie, clean-code, fondamentaux :
                            </Typography>
                            <Box>
                                <Typography variant="subtitle1" align="left">
                                    Développeur web fullstack
                                </Typography>
                                <Typography variant="caption" align="right">
                                    WILD CODE SCHOOL mars 2020 à juillet 2020
                                </Typography>
                                <Typography paragraph>
                                    <List disablePadding>
                                        <ListItem>
                                            Vanilla JavaScript / ReactJS /
                                            NodeJS / Redux / SQL
                                        </ListItem>
                                        <ListItem>
                                            Git / UNIX SCRUM / Agile /
                                            Télétravail / veille technologique
                                        </ListItem>
                                        <ListItem>
                                            SCRUM / Agile / Télétravail / veille
                                            technologique
                                        </ListItem>
                                        <ListItem>
                                            modélisation de BDD (MCD, MLD),
                                            cryptage password, JSON web
                                            tokens...
                                        </ListItem>
                                    </List>
                                </Typography>
                            </Box>
                        </Container>
                        <Container>
                            <Box>
                                <Typography variant="h3">
                                    Loisirs et intérêts
                                </Typography>
                                <Typography>
                                    <List disablePadding>
                                        <ListItem dense>
                                            Sport : 1er Dan World Taekwondo
                                            Fédération (élève de Maître Han Chun
                                            Tec), souplesse quotidienne,
                                            musculation au poid du corps.
                                        </ListItem>
                                        <ListItem>
                                            Jardinage : système self-watering,
                                            semis et bouturages en tout genre
                                        </ListItem>
                                        <ListItem>
                                            Gaming : EVE online, LoL, KI 3, SF
                                            V, participation à des tournois de
                                            Vs fighting
                                        </ListItem>
                                        <ListItem>
                                            Wachting : sérievore, cinémavore,
                                            documentavore
                                        </ListItem>
                                    </List>
                                </Typography>
                            </Box>
                        </Container>
                        <Button onClick="">Télécharger</Button>
                    </Frame>
                </Stack>
            </Scroll>
        </Fragment>
    );
}

export default CV;
