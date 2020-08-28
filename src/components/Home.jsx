// import core
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

// import style
import "../responsive.css";

function Home({ projects }) {
    const lastProjects = projects.map((project) => (
        <Fragment>
            <Link to={`/portfolio/${project.id}/description`}>
                <img
                    className="preview"
                    src={`${process.env.REACT_APP_HOST}/latest/${project.id}`}
                    alt={`screenshot ${project.name} : ${project.id} `}
                />
            </Link>
            <p>{project.name}</p>
        </Fragment>
    ));

    return (
        <div className="main">
            <h1>Projets récents</h1>
            {lastProjects.slice(0, 3)}
        </div>
    );
}

export default Home;
