// import library
import React from "react";
import { Link, useParams } from "react-router-dom";
import { Paper, MenuList, MenuItem, Button, Avatar } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import InfoIcon from "@material-ui/icons/Info";
import CollectionsIcon from "@material-ui/icons/Collections";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import AssignmentIcon from "@material-ui/icons/Assignment";

// import style
import "../App.css";

// init component
const Header = () => {
    return (
        <Paper className="header">
            <MenuList>
                <AvatarGroup>
                    <Link to="/">
                        <Button>
                            {" "}
                            Acceuil <HomeIcon />{" "}
                        </Button>
                    </Link>
                    {/* appeler une fonction pour afficher l' id du projet le plus récent */}
                    <Link to={`/portfolio/1/description`}>
                        <Button>
                            {" "}
                            Portfolio
                            <CollectionsIcon />
                        </Button>
                    </Link>

                    <Link to="/details">
                        <Button>
                            {" "}
                            Détails <InfoIcon />{" "}
                        </Button>
                    </Link>

                    <Link to="/contact">
                        <Button>
                            {" "}
                            Contact <ContactMailIcon />{" "}
                        </Button>
                    </Link>
                </AvatarGroup>
            </MenuList>
        </Paper>
    );
};

// export component
export default Header;
