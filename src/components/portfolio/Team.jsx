import React, { useState, useEffect, Fragment } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

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
        <div>
            <p>{developper.firstname}</p>
            <p>{developper.lastname}</p>
            <a href={developper.linkedIn}>LinkedInIcon</a>
            <a href={developper.github}>GitHubIcon</a>
        </div>
    ));
    return (
        <Fragment>
            <p>
                {nbrOfDevsByTeam.Nbr_devs} développeur.s.ses a.ont réalisé.e.s
                le projet <strong>{nbrOfDevsByTeam.name}</strong> :
            </p>
            <div>{listOfDeveloppers}</div>
        </Fragment>
    );
}

export default Team;
