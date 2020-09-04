// import core
import React, { useState, useEffect, Fragment } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

// import style
import "../style/stacks.css";

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
        <div className="stack-card">
            <p className="name stack">{stack.name}</p>
            <p className="version">{stack.version_used}</p>
            <a className="site-link" href={stack.site}>
                site officiel
            </a>
        </div>
    ));

    const listOfTools = tools.map((tool) => (
        <div className="tool-card">
            <p className="name tool">{tool.name} </p>
            <p className="version">{tool.version_used}</p>
            <a className="site-link" href={tool.site}>
                site officiel
            </a>
        </div>
    ));
    return (
        <div className="cards">
            <div className="stacks">
                <h3 className="stack-title">Les technos</h3>
                {listOfStacks}
            </div>
            <div className="tools">
                <h3 className="tool-title">Les outils</h3>
                {listOfTools}
            </div>
        </div>
    );
}

export default Stacks;
