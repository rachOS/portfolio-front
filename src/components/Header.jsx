// import core
import React from "react";
import { Link } from "react-router-dom";

// import Material UI
import { Button, makeStyles, MenuList, Paper } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import InfoIcon from "@material-ui/icons/Info";
import CollectionsIcon from "@material-ui/icons/Collections";

const useStyle = makeStyles(theme => ({
    root:{
        gridArea:"header"
    }
}))

const Header = ({ lastProject }) => {
    const classes = useStyle()
    return (
        <Paper className={classes.root}>
            <MenuList>
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
            </MenuList>
        </Paper>
    );
};

export default Header;
