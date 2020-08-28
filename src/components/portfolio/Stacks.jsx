import React, { useState, useEffect, Fragment } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

function Stacks() {
    const { id } = useParams();
    const [stacks, setStacks] = useState([{}]);
    const [tools, setTools] = useState([{}]);

    const getStacksByProject = (idProject) => {
        const stacksURL = `${process.env.REACT_APP_HOST}/projects/${idProject}/stacks`;
        Axios.get(stacksURL)
            .then((response) => response.data)
            .then((data) => setStacks(data));
    };
    const getToolsByProject = (idProject) => {
        const stacksURL = `${process.env.REACT_APP_HOST}/projects/${idProject}/tools`;
        Axios.get(stacksURL)
            .then((response) => response.data)
            .then((data) => setTools(data));
    };

    useEffect(() => {
        getStacksByProject(id);
        getToolsByProject(id);
    }, [id]);

    const listOfStacks = stacks.map((stack) => (
        <div>
            <p>{stack.name}</p>
            <p>{stack.version_used}</p>
            <a href={stack.site}>site officiel</a>
        </div>
    ));

    const listOfTools = tools.map((tool) => (
        <div>
            <p>{tool.name} </p>
            <p>{tool.version_used}</p>
            <a href={tool.site}>site officiel</a>
        </div>
    ));
    return (
        <Fragment>
            <h3>Les technos</h3>
            {listOfStacks}
            <hr />
            <h3>Les outils</h3>
            {listOfTools}
        </Fragment>
    );
}

export default Stacks;
