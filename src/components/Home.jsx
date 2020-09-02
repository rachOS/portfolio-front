// import core
import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

// import style
import "./style/home.css";

function Home({ projects }) {
    const lastProjects = projects.map((project) => (
        <Fragment>
            <NavLink className="preview-link" to={`/portfolio/${project.id}/description`}>
                <img
                    className="preview"
                    src={`${process.env.REACT_APP_HOST}/latest/${project.id}`}
                    alt={`screenshot ${project.name} : ${project.id} `}
                />
            </NavLink>
            <p>{project.name}</p>
        </Fragment>
    ));

    return (
        <section>
            <h1>Projets récents</h1>
            {lastProjects.slice(0, 3)}
        </section>
    );
}

export default Home;
