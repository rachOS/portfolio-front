// import core
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

// import style
import "../style/description.css"

function Description({ project, projectName, url }) {
    const { id } = useParams();
    const [description, SetDescription] = useState(null);

    const getDescription = (idProject) => {
        const projectURL = `${process.env.REACT_APP_HOST}/projects/${idProject}/description`;
        Axios.get(projectURL)
            .then((response) => response.data)
            .then((data) => SetDescription(data));
    };
    useEffect(() => {
        getDescription(id);
    }, [id]);

    const checkDescription = description
        ? description
        : "Description du projet";

    return (
        <section className="description">
            <article
                className="description-content"
                dangerouslySetInnerHTML={{ __html: checkDescription }}
            />
            <p >
                {url ? (
                    <a className="site-link" href={url} title="lien du site">
                        {" "}
                        Lien du site
                    </a>
                ) : (
                    "site en cours de déploiement"
                )}
            </p>
            <img
                className="description-img"
                src={`${process.env.REACT_APP_HOST}/latest/${project.id}`}
                alt={`screenshot ${project.name} : ${project.id} `}
            />
        </section>
    );
}

export default Description;
