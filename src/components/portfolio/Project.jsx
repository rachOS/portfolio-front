import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

// import components
import Informations from "./Informations";

function Project({ projects }) {

    const { id } = useParams();
    const [project, setProject] = useState([{}]);

    const getOneProject = (idProject) => {
        const projectURL = `${process.env.REACT_APP_HOST}/projects/${idProject}`;
        Axios.get(projectURL)
            .then((response) => response.data)
            .then((data) => setProject(data[0]));
    };

    useEffect(() => {
        getOneProject(id);
    }, [id]);

    return (
        <div >
            <Informations projects={projects} project={project} />
        </div>
    );
}

export default Project;
