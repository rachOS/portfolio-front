import React, { useState, useEffect } from "react";
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
            <div title={stack.name} subheader={stack.version_used} />
            <a href={stack.site}>site officiel</a>
        </div>
    ));

    const listOfTools = tools.map((tool) => (
        <div>
            <div title={tool.name} subheader={tool.version_used} />
            <a href={tool.site}>site officiel</a>
        </div>
    ));
    return (
        <div>
            <div>
                {listOfStacks}
                <h3>Les technos</h3>
            </div>
            <hr />

            <div>
                {listOfTools}
                <h3>Les outils</h3>
            </div>
        </div>
    );
}

export default Stacks;
