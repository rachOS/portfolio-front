// import core
import React from "react";
import { Link } from "react-router-dom";

function Home({ projects }) {
    const lastProjects = projects.map((project) => (
        <div>
            <Link to={`/portfolio/${project.id}/description`}>
                <img
                    src={`${process.env.REACT_APP_HOST}/latest/${project.id}`}
                    alt={`screenshot ${project.name} : ${project.id} `}
                />
            </Link>
            <p>{project.name}</p>
        </div>
    ));

    return (
        <div>
            <h1>Projets récents</h1>
            <div>{lastProjects.slice(0, 3)}</div>
        </div>
    );
}

export default Home;
