// import core
import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";

// import library
import { Document, Page, pdfjs } from "react-pdf/dist/entry.webpack";
import portrait from "../static/image/avatar/linkedin _avatar.jpeg";

//import style
import "./style/left-menu.css";
import "../responsive.css";

// import files
import pdf from "../static/CV/Grégory_Chamekh_DéveloppeurWebFullstack-junior-v10b.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const LeftContent = () => {
    const [numPages, setNumPages] = useState(null);
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };
    const onLoadError = (error) => {
        return error.message;
    };
    return (
        <Fragment>
            <section className="about">
                <h2>A propos</h2>
                <button>plus d'infos</button>
                <img
                    className="self-portrait"
                    src={portrait}
                    alt="M. Grégory chamekh, développeur web"
                />
                <p>
                    Grégory Chamekh, développeur web fullstacks ReactJS /
                    NodeJS, ambassadeur Wild Code School.
                </p>
                <p>
                    Touche à tout et bienveillant, ces deux qualités me
                    permettent de m'adapater facilement. De nature curieux et
                    observateur, le soucis du détails et l'optimisation me
                    fascinent. En effet en dehors du développement web, je
                    pratique la photographie, la musique assistée par
                    ordinateur, des plans de nutrition ... Le point commun entre
                    ces activités se rejoint dans l'informatique qui est pour
                    moi une passion de longue date. Depuis mars 2020 j'ai eu la
                    chance d'effectuer une reconvertion professionnelle dans le
                    développement web et ce nouveau métier me permet de
                    m'épanouir complètement.
                </p>
                <h2>C.V.</h2>
                <button classes="">Afficher</button>
                <div>
                    <Document
                        file={pdf}
                        onLoadSuccess={onDocumentLoadSuccess}
                        onLoadError={onLoadError}
                    >
                        <Page pageNumber={1} height="300" />
                    </Document>
                    <Link href={pdf} target="blank" download>
                        <button>Télécharger</button>
                    </Link>
                </div>
                <h2>Dispos</h2>
                <button>Plus d'infos</button>
                <p>
                    Je suis actuellement en recherche de stage de fin d'études
                    afin de pouvoir monter en compétences. Aussi, ce stage
                    pourra me servir comme support pour du passage du titre
                    professionnel DWWM. Je suis également ouvert à une prise de
                    poste pour un investissement et une évolution de carrière au
                    sein de votre entreprise
                </p>
            </section>
        </Fragment>
    );
};

export default LeftContent;
