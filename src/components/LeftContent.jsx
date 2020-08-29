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
        <div className="about-menu">
            <section className=" about-menu accordion">
                <input className="accordion_input" type="checkbox" name="about" id="about"/>
                <label className="accordion_label" htmlFor="about">
                    A propos
                </label>
                <article className="accordion_content">
                    <img
                        className="self-portrait"
                        src={portrait}
                        alt="M. Grégory chamekh, développeur web"
                    />
                    <p>
                        Grégory Chamekh, développeur web fullstacks ReactJS /
                        NodeJS, ambassadeur Wild Code School.
                    </p>
                </article>
                <article className="accordion_content">
                    <p className="first-paragraph">
                        Touche à tout et bienveillant, ces deux qualités me
                        permettent de m'adapater facilement. De nature curieux
                        et observateur, le soucis du détails et l'optimisation
                        me fascinent.
                    </p>{" "}
                    <p>
                        En effet en dehors du développement web, je pratique la
                        photographie, la musique assistée par ordinateur, des
                        plans de nutrition ... Le point commun entre ces
                        activités se rejoint dans l'informatique qui est pour
                        moi une passion de longue date.
                    </p>{" "}
                    <p>
                        Suite à un projet professionnel murement réfléchi, j'ai
                        effectué de mars à juillet 2020 une reconvertion
                        professionnelle dans le développement web fullstack à la{" "}
                        <a
                            className="links"
                            href="https://www.wildcodeschool.com/fr-FR/campus/bordeaux"
                        >
                            Wild Code School de Bordeaux
                        </a>
                        . Désormais ce nouveau métier me permet de m'épanouir
                        complètement.
                    </p>
                </article>
            </section>
            <section className="accordion">
                <input className="accordion_input" type="checkbox" name="cv" id="cv"/>
                <label className="accordion_label" for="cv" id="cv">
                    C.V.
                </label>
                <article className="accordion_content">
                    <Document
                        file={pdf}
                        onLoadSuccess={onDocumentLoadSuccess}
                        onLoadError={onLoadError}
                    >
                        <Page pageNumber={1} height="300" />
                    </Document>
                    <a href={pdf} target="blank" download>
                        <button>Télécharger</button>
                    </a>
                </article>
            </section>
            <section className="accordion">
                <input
                    className="accordion_input"
                    type="checkbox"
                    name="availability"
                    id="availability"
                />
                <label className="accordion_label" for="availability">
                    Disponibilités
                </label>
                <article className="accordion_content">
                    <p className="first-paragraph">
                        Je suis actuellement en recherche de stage de fin
                        d'études afin de pouvoir monter en compétences. Aussi,
                        ce stage pourra me servir comme support pour du passage
                        du titre professionnel DWWM.{" "}
                    </p>
                    <p>
                        Je suis également ouvert à une prise de poste pour un
                        investissement et une évolution de carrière au sein de
                        votre entreprise
                    </p>
                </article>
            </section>
        </div>
    );
};

export default LeftContent;
