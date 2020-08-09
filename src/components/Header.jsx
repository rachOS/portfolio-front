// import library
import React from "react";
import { Link } from "react-router-dom";
import { Paper, MenuList, Button } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import InfoIcon from "@material-ui/icons/Info";
import CollectionsIcon from "@material-ui/icons/Collections";
import AvatarGroup from "@material-ui/lab/AvatarGroup";

// import style
import "../App.css";

// init component
const Header = ({ lastProject }) => {
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
                    <Link to={`/portfolio/${lastProject.id}/description`}>
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
