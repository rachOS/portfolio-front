import React, { useState, useEffect, Fragment } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

// import fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import style
import "../style/team.css";

function Team() {
    const { id } = useParams();
    const [nbrOfDevsByTeam, setNbrOfDevsByTeam] = useState([{}]);
    const [developpers, setDeveloppers] = useState([{}]);

    const getNbrOfDevsByTeam = (idProject) => {
        const nbrOfDevsURL = `${process.env.REACT_APP_HOST}/projects/${idProject}/total-developpers`;
        Axios.get(nbrOfDevsURL)
            .then((response) => response.data)
            .then((data) => setNbrOfDevsByTeam(data[0]));
    };

    const getDeveloppersInfos = (idProject) => {
        const devsInfosURL = `${process.env.REACT_APP_HOST}/projects/${idProject}/developpers-infos`;
        Axios.get(devsInfosURL)
            .then((response) => response.data)
            .then((data) => setDeveloppers(data));
    };

    useEffect(() => {
        getNbrOfDevsByTeam(id);
        getDeveloppersInfos(id);
    }, [id]);

    const listOfDeveloppers = developpers.map((developper) => (
        <div className="dev-card">
            <div className="fullname">
                <p className="firstname">{developper.firstname}</p>
                <p className="lastname">{developper.lastname}</p>
            </div>
            <div className="icons-container">
                <a
                    className="icon"
                    href={developper.linkedIn}
                    title="LinkedIn"
                >
                    <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
                </a>
                <a
                    className="icon"
                    href={developper.github}
                    title="GitHub"
                >
                    {" "}
                    <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
                </a>
            </div>
        </div>
    ));
    return (
        <Fragment>
            <p>
                {nbrOfDevsByTeam.Nbr_devs} développeur.s.ses a.ont réalisé.e.s
                le projet <strong>{nbrOfDevsByTeam.name}</strong> :
            </p>
            <div className="cards">{listOfDeveloppers}</div>
        </Fragment>
    );
}

export default Team;
