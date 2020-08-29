import React, { Fragment } from "react";
import { Link, useRouteMatch } from "react-router-dom";

function NavBar() {
    let { url } = useRouteMatch();

    const tabsLabel = [
        {
            label: "La description",
            url: `${url}/description`,
        },
        {
            label: "L'équipe",
            url: `${url}/team`,
        },
        {
            label: "Les technos et les outils",
            url: `${url}/stacks-tools`,
        },
        {
            label: "Les fonctionnalités",
            url: `${url}/features`,
        },
    ];

    const links = tabsLabel.map((tab) => (
        <Link to={`${tab.url}`}>{tab.label}</Link>
    ));

    return <nav>{links}</nav>;
}

export default NavBar;
