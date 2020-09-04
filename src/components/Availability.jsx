import React from "react";
import { Link } from "react-router-dom";

// import style
import "../responsive.css";

function Availability() {
    return (
        <section>
            <h2>Disponibilités et infos</h2>
            <article>
                <p className="first-paragraph">
                    Je suis actuellement en recherche de stage de fin d'études
                    afin de pouvoir monter en compétences. Aussi, ce stage
                    pourra me servir comme support pour le passage du titre
                    professionnel DWWM.
                </p>
                <p>
                    Je suis également ouvert à une prise de poste pour un
                    investissement et une évolution de carrière au sein de votre
                    entreprise.
                </p>
                <p>
                    D'une reconversion professionnelle en tant develloppeur web
                    fullstack, c'est à la Wild Code School de Bordeaux que j'ai
                    suivi la formation professionnelle de Développeur Web et Web
                    Mobile cursus ReactJS / NodeJS.
                </p>
                <p>
                    De part mon implication et ma participation active durant
                    cette formation, le status d'ambassadeur m'a été proposé,
                    représentant les éléves les plus engagés ayant pour but de
                    co-construire la communauté. En ce moment je prépare le
                    passage du titre professionnel qui aura lieu à la fin de
                    l'année 2020, en parallèle avec le développement de quelques
                    projets personnels.
                </p>
                <p>
                    Par la suite, je compte entreprendre une formation dans un
                    domaine qui m'attire depuis quelques temps pour apprendre le
                    métier de data analyste. C'est un autre domaine qui m'attire
                    depuis longtemps et j'apprécie l'éventuelle complémentarité
                    qu'il peut y avoir avec le métier de développeur web.
                </p>

                <p>
                    Pour toutes autres infos, n' hésitez pas à
                    <Link to="/contact">
                        {" "}
                        <button>me contacter</button>
                    </Link>
                </p>
            </article>
        </section>
    );
}

export default Availability;
