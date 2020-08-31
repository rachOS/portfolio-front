// import library
import React from "react";

// import fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import style
import "../responsive.css";

const Footer = () => {
    return (
        <footer className="footer">
            <a href="https://www.instagram.com/gregory.rachid.chamekh/" title="Instagram">
                <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
            <a href="https://www.linkedin.com/in/gregory-chamekh/" title="LinkedIn">
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
            <a href="https://github.com/rachOS" title="GitHub">
                <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
            <p>Design et développement par Grégory Chamekh</p>
        </footer>
    );
};

// export component
export default Footer;
