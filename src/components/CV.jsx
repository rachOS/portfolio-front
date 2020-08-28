// import Core
import React, { Fragment } from "react";

// import library
import { Frame, Scroll, Stack } from "framer";

// import style
import "./style/cv.css";
import "../responsive.css"

/* const useStyle = makeStyles((theme) => ({
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
    ul_item: {
        display: "flex",
        flexWrap: "wrap",
    },
})); */

function CV() {
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
                        <h1>
                            Développeur web fullstack
                            <div>
                                <p>
                                    JavaScript | ReactJS | NodeJS | Versionning
                                    | Clean code | Veille techno | Anglais
                                </p>
                            </div>
                        </h1>
                        <div>
                            <p variant="body2" align="left">
                                Communicant / Dynamique / Bienveillant
                            </p>
                            <p variant="body2" align="left">
                                Motivé / Créatif / Curieux
                            </p>
                            <p variant="body2" align="left">
                                Polyvalent / Rigoureux / Perséverent / Autonome
                            </p>
                        </div>
                        <hr />
                        <div>
                            <p>Grégory Chamekh:</p>
                            <p>juin 1977 / 43 ans</p>
                            <p>Bordeaux</p>
                            <p>06.349.349.63 |</p>
                            <p>g.chamekh@e-nautia.com | disponible</p>
                        </div>
                        <div>
                            <p>Parcours professionnel</p>
                        </div>
                        <div>
                            <p>Développeur web fullstack</p>
                            <p>WILD CODE SCHOOL de mars 2020 à juillet 2020</p>
                        </div>
                        <div>
                            <p>
                                <ul>
                                    <li>
                                        Stacks :{" "}
                                        <p className="javascript">JavaScript</p>{" "}
                                        /<p className="react">ReactJS</p>/{" "}
                                        <p className="node">NodeJS</p> /{" "}
                                        <p className="redux">Redux</p>{" "}
                                    </li>
                                    <li>
                                        Site e-commerce de vente de cartes
                                        cadeaux en ligne.
                                    </li>
                                    <li>Jeu tour par tour multijoueurs.</li>
                                    <li>Hackathons.</li>
                                    <li>
                                        Découpage d’une application web en
                                        composants.
                                    </li>
                                    <li>
                                        Création et consommation d’API.
                                        Modélisation de bases de données (MCD,
                                        MLD)
                                    </li>
                                </ul>
                            </p>
                        </div>

                        <div>
                            <p>Photographe</p>
                            <p>HANS LUCAS de mars 2019 à ce jour</p>
                        </div>
                        <div>
                            <p paragraph>
                                <ul disablePadding>
                                    <li>
                                        Edition des métadonnées selon les normes
                                        des métiers de l’information avec
                                        Exiftool en CLI.
                                    </li>
                                    <li>
                                        Prises de vues photographique sur des
                                        sujets de société.
                                    </li>
                                    <li>
                                        Rédaction d’un tutoriel sur l’édition
                                        des métadonnées pour les utilisateurs
                                        Linux
                                    </li>
                                </ul>
                            </p>
                        </div>
                        <hr />
                        <div>
                            <p>Agent de quai</p>
                            <p>
                                ENVIE 2E AQUITAINE de juillet 2018 à février
                                2020
                            </p>
                        </div>
                        <div>
                            <p>
                                <ul>
                                    <li>
                                        Elaboration d’un projet professionnel en
                                        tant que développeur web.
                                    </li>
                                    <li>
                                        Réception de colis postaux, tri selectif
                                        des produits...
                                    </li>
                                </ul>
                            </p>
                        </div>
                        <div>
                            <p>Formations</p>
                        </div>
                        <div>
                            <p>Développeur web fullstack</p>
                            <p>WILD CODE SCHOOL mars 2020 à juillet 2020</p>
                        </div>
                        <div>
                            <p>Méthodologie, clean-code, fondamentaux :</p>
                            <p paragraph>
                                <ul disablePadding>
                                    <li>
                                        <p className="javascript">
                                            Vanilla JavaScript
                                        </p>
                                        <p className="react">ReactJS</p>/
                                        <p className="node">NodeJS</p> /{" "}
                                        <p className="redux">Redux</p> /{" "}
                                        <p className="sql">SQL</p>
                                    </li>
                                    <li>
                                        Git / UNIX SCRUM / Agile / Télétravail /
                                        veille technologique
                                    </li>
                                    <li>
                                        SCRUM / Agile / Télétravail / veille
                                        technologique
                                    </li>
                                    <li>
                                        modélisation de BDD (MCD, MLD), cryptage
                                        password, JSON web tokens...
                                    </li>
                                </ul>
                            </p>
                        </div>
                        <div>
                            <p>Loisirs et intérêts</p>
                            <p>
                                <ul>
                                    <li>
                                        <p>Sport</p>
                                        <p>
                                            : 1er Dan World Taekwondo Fédération
                                            (élève de Maître Han Chun Tec),
                                            souplesse quotidienne, musculation
                                            au poid du corps.
                                        </p>
                                    </li>
                                    <li>
                                        <p>Jardinage</p>
                                        <p>
                                            : système self-watering, semis et
                                            bouturages en tout genre
                                        </p>
                                    </li>
                                    <li>
                                        <p>Gaming</p>
                                        <p>
                                            : EVE online, LoL, KI 3, SF V,
                                            participation à des tournois de Vs
                                            fighting
                                        </p>
                                    </li>
                                    <li>
                                        <p>Wachting</p>
                                        <p>
                                            : sérievore, cinémavore,
                                            documentavore
                                        </p>
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </Frame>
                </Stack>
            </Scroll>
        </Fragment>
    );
}

export default CV;
