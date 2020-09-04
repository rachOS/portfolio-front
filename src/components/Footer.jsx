// import library
import React from "react";

// import fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <footer className="footer">
            <a
                className="icon"
                href="https://www.instagram.com/gregory.rachclassName.chamekh/"
                title="Instagram"
            >
                <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
            </a>
            <a
                className="icon"
                href="https://www.linkedin.com/in/gregory-chamekh/"
                title="LinkedIn"
            >
                <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
            </a>
            <a className="icon" href="https://github.com/rachOS" title="GitHub">
                <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
            </a>
            <p>Design et développement par Grégory Chamekh</p>
        </footer>
    );
};

// export component
export default Footer;
