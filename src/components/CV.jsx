// import Core
import React, { Fragment } from "react";

// import library
import { Frame, Scroll, Stack } from "framer";

// import style
import "./style/cv.css";

// import Material UI
import {
    Box,
    Divider,
    List,
    ListItem,
    makeStyles,
    Typography,
} from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import PhoneInTalkSharpIcon from "@material-ui/icons/PhoneInTalkSharp";
import EmailSharpIcon from "@material-ui/icons/EmailSharp";
import CakeSharpIcon from "@material-ui/icons/CakeSharp";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import FaceIcon from "@material-ui/icons/Face";

const useStyle = makeStyles((theme) => ({
    root: {
        gridArea: "screenshot",
        display: "flex",
        alignItems: "center",
        padding: "5%",
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        fontSize: "3em",
    },
    subtitle: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    spec: {
        fontSize: "0.30em",
    },
    skills: {
        margin: "10px 0px",
    },
    infos: {
        display: "flex",
        justifyContent: "start",
    },
    icon: {
        marginRight: "15px",
    },
    section: {
        backgroundColor: "rgb(20, 20, 20)",
        color: "rgb(255, 255, 255)",
        padding: "5px",
        margin: "10px 0px",
    },
    title_section: {
        fontSize: "1.5em",
    },
    jobs: {
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        alignItems: "baseline",
        padding: "10px",
    },
    divider: {
        backgroundColor: "orange",
    },
    job_title: {
        fontWeight: "800",
    },
    dot_icon: {
        width: "10px",
        margin: "10px",
    },
    list_item: {
        display: "flex",
        flexWrap: "wrap",
    },
}));

function CV() {
    const classes = useStyle();
    return (
        <Fragment>
            <Scroll height={"60%"} width={"30%"}>
                <Stack height={"100%"}>
                    <Frame
                        backgroundColor={"none"}
                        height={"auto"}
                        width={"auto"}
                        maxWidth={"100%"}
                        padding={"0px"}
                    >
                        <Typography
                            className={[classes.title, classes.section]}
                            variant="h1"
                            align="center"
                        >
                            Développeur web fullstack
                            <div className={[classes.subtitle]}>
                                <Typography className={[classes.spec]}>
                                    JavaScript | ReactJS | NodeJS | Versionning
                                    | Clean code | Veille techno | Anglais
                                </Typography>
                            </div>
                        </Typography>
                        <div className={[classes.skills]}>
                            <Typography variant="body2" align="left">
                                Communicant / Dynamique / Bienveillant
                            </Typography>
                            <Typography variant="body2" align="left">
                                Motivé / Créatif / Curieux
                            </Typography>
                            <Typography variant="body2" align="left">
                                Polyvalent / Rigoureux / Perséverent / Autonome
                            </Typography>
                        </div>
                        <Divider className={[classes.divider]} />
                        <div className={[classes.skills]}>
                            <Typography className={[classes.infos]}>
                                <FaceIcon className={[classes.icon]} />
                                Grégory Chamekh:
                            </Typography>
                            <Typography className={[classes.infos]}>
                                <CakeSharpIcon className={[classes.icon]} /> 19
                                juin 1977 / 43 ans
                            </Typography>
                            <Typography className={[classes.infos]}>
                                <MyLocationIcon className={[classes.icon]} />
                                Bordeaux
                            </Typography>
                            <Typography className={[classes.infos]}>
                                <PhoneInTalkSharpIcon
                                    className={[classes.icon]}
                                />
                                06.349.349.63 |
                            </Typography>
                            <Typography className={[classes.infos]}>
                                <EmailSharpIcon className={[classes.icon]} />
                                g.chamekh@e-nautia.com | disponible
                            </Typography>
                        </div>
                        <div>
                            <Typography
                                className={[
                                    classes.section,
                                    classes.title_section,
                                ]}
                                variant="h3"
                                align="center"
                            >
                                Parcours professionnel
                            </Typography>
                        </div>
                        <div className={[classes.jobs]}>
                            <Typography
                                className={[classes.job_title]}
                                variant="subtitle1"
                                align="left"
                            >
                                Développeur web fullstack
                            </Typography>
                            <Typography variant="caption" align="right">
                                WILD CODE SCHOOL de mars 2020 à juillet 2020
                            </Typography>
                        </div>
                        <div>
                            <Typography paragraph>
                                <List disablePadding>
                                    <ListItem>
                                        <FiberManualRecordIcon
                                            className={classes.dot_icon}
                                        />{" "}
                                        Stacks :{" "}
                                        <Typography className="javascript">
                                            JavaScript
                                        </Typography>{" "}
                                        /
                                        <Typography className="react">
                                            ReactJS
                                        </Typography>
                                        /{" "}
                                        <Typography className="node">
                                            NodeJS
                                        </Typography>{" "}
                                        /{" "}
                                        <Typography className="redux">
                                            Redux
                                        </Typography>{" "}
                                    </ListItem>
                                    <ListItem>
                                        <FiberManualRecordIcon
                                            className={classes.dot_icon}
                                        />
                                        Site e-commerce de vente de cartes
                                        cadeaux en ligne.
                                    </ListItem>{" "}
                                    <ListItem>
                                        <FiberManualRecordIcon
                                            className={classes.dot_icon}
                                        />{" "}
                                        Jeu tour par tour multijoueurs.
                                    </ListItem>{" "}
                                    <ListItem>
                                        <FiberManualRecordIcon
                                            className={classes.dot_icon}
                                        />
                                        Hackathons.
                                    </ListItem>
                                    <ListItem>
                                        <FiberManualRecordIcon
                                            className={classes.dot_icon}
                                        />{" "}
                                        Découpage d’une application web en
                                        composants.
                                    </ListItem>
                                    <ListItem>
                                        <FiberManualRecordIcon
                                            className={classes.dot_icon}
                                        />{" "}
                                        Création et consommation d’API.
                                        Modélisation de bases de données (MCD,
                                        MLD)
                                    </ListItem>
                                </List>
                            </Typography>
                        </div>

                        <div className={[classes.jobs]}>
                            <Typography
                                className={[classes.job_title]}
                                variant="subtitle1"
                                align="left"
                            >
                                Photographe
                            </Typography>
                            <Typography variant="caption" align="right">
                                HANS LUCAS de mars 2019 à ce jour
                            </Typography>
                        </div>
                        <div className={[classes.paragraph]}>
                            <Typography paragraph>
                                <List disablePadding>
                                    <ListItem>
                                        <FiberManualRecordIcon
                                            className={classes.dot_icon}
                                        />{" "}
                                        Edition des métadonnées selon les normes
                                        des métiers de l’information avec
                                        Exiftool en CLI.
                                    </ListItem>
                                    <ListItem>
                                        <FiberManualRecordIcon
                                            className={classes.dot_icon}
                                        />{" "}
                                        Prises de vues photographique sur des
                                        sujets de société.
                                    </ListItem>{" "}
                                    <ListItem>
                                        <FiberManualRecordIcon
                                            className={classes.dot_icon}
                                        />{" "}
                                        Rédaction d’un tutoriel sur l’édition
                                        des métadonnées pour les utilisateurs
                                        Linux
                                    </ListItem>{" "}
                                </List>
                            </Typography>
                        </div>
                        <Divider className={[classes.divider]} />
                        <div className={[classes.jobs]}>
                            <Typography
                                className={[classes.job_title]}
                                variant="subtitle1"
                                align="left"
                            >
                                Agent de quai
                            </Typography>
                            <Typography variant="caption" align="right">
                                ENVIE 2E AQUITAINE de juillet 2018 à février
                                2020
                            </Typography>
                        </div>
                        <div className={[classes.paragraph]}>
                            <Typography paragraph>
                                <List disablePadding>
                                    <ListItem>
                                        <FiberManualRecordIcon
                                            className={classes.dot_icon}
                                        />{" "}
                                        Elaboration d’un projet professionnel en
                                        tant que développeur web.
                                    </ListItem>
                                    <ListItem>
                                        <FiberManualRecordIcon
                                            className={classes.dot_icon}
                                        />{" "}
                                        Réception de colis postaux, tri selectif
                                        des produits...
                                    </ListItem>
                                </List>
                            </Typography>
                        </div>
                        <div>
                            <Typography
                                className={[
                                    classes.section,
                                    classes.title_section,
                                ]}
                                variant="h3"
                                align="center"
                            >
                                Formations
                            </Typography>
                        </div>
                        <div className={[classes.jobs]}>
                            <Typography
                                className={[classes.job_title]}
                                variant="subtitle1"
                                align="left"
                            >
                                Développeur web fullstack
                            </Typography>
                            <Typography variant="caption" align="right">
                                WILD CODE SCHOOL mars 2020 à juillet 2020
                            </Typography>
                        </div>
                        <div lassName={[classes.paragraph]}>
                            <Typography>
                                Méthodologie, clean-code, fondamentaux :
                            </Typography>
                            <Typography paragraph>
                                <List disablePadding>
                                    <ListItem>
                                        <FiberManualRecordIcon
                                            className={classes.dot_icon}
                                        />
                                        <Typography className="javascript">
                                            Vanilla JavaScript
                                        </Typography>
                                        /{" "}
                                        <Typography className="react">
                                            ReactJS
                                        </Typography>{" "}
                                        /
                                        <Typography className="node">
                                            NodeJS
                                        </Typography>{" "}
                                        /{" "}
                                        <Typography className="redux">
                                            Redux
                                        </Typography>{" "}
                                        /{" "}
                                        <Typography className="sql">
                                            SQL
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <FiberManualRecordIcon
                                            className={classes.dot_icon}
                                        />{" "}
                                        Git / UNIX SCRUM / Agile / Télétravail /
                                        veille technologique
                                    </ListItem>
                                    <ListItem>
                                        <FiberManualRecordIcon
                                            className={classes.dot_icon}
                                        />{" "}
                                        SCRUM / Agile / Télétravail / veille
                                        technologique
                                    </ListItem>
                                    <ListItem>
                                        <FiberManualRecordIcon
                                            className={classes.dot_icon}
                                        />
                                        modélisation de BDD (MCD, MLD), cryptage
                                        password, JSON web tokens...
                                    </ListItem>
                                </List>
                            </Typography>
                        </div>
                        <Box>
                            <Typography
                                className={[
                                    classes.section,
                                    classes.title_section,
                                ]}
                                variant="h3"
                                align="center"
                            >
                                Loisirs et intérêts
                            </Typography>
                            <Typography>
                                <List disablePadding>
                                    <ListItem className={classes.list_item}>
                                        <Typography
                                            className={[classes.job_title]}
                                        >
                                            Sport
                                        </Typography>
                                        <Typography>
                                            : 1er Dan World Taekwondo Fédération
                                            (élève de Maître Han Chun Tec),
                                            souplesse quotidienne, musculation
                                            au poid du corps.
                                        </Typography>
                                    </ListItem>
                                    <ListItem className={classes.list_item}>
                                        <Typography
                                            className={[classes.job_title]}
                                        >
                                            Jardinage
                                        </Typography>{" "}
                                        <Typography>
                                            : système self-watering, semis et
                                            bouturages en tout genre
                                        </Typography>
                                    </ListItem>
                                    <ListItem className={classes.list_item}>
                                        <Typography
                                            className={[classes.job_title]}
                                        >
                                            Gaming
                                        </Typography>{" "}
                                        <Typography>
                                            : EVE online, LoL, KI 3, SF V,
                                            participation à des tournois de Vs
                                            fighting
                                        </Typography>
                                    </ListItem>
                                    <ListItem className={classes.list_item}>
                                        <Typography
                                            className={[classes.job_title]}
                                        >
                                            Wachting
                                        </Typography>
                                        <Typography>
                                            : sérievore, cinémavore,
                                            documentavore
                                        </Typography>
                                    </ListItem>
                                </List>
                            </Typography>
                        </Box>
                    </Frame>
                </Stack>
            </Scroll>
        </Fragment>
    );
}

export default CV;
