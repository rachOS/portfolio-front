import React from "react";
import {
    Paper,
    Button,
    Tabs,
    Tab,
    Card,
    CardContent,
    MobileStepper,
    Typography,
} from "@material-ui/core";
import {
    KeyboardArrowLeft,
    KeyboardArrowRight,
} from "@material-ui/icons/KeyboardArrowRight";

// import components

// import data

// import style
import "./style/portfolio.css";

function Portfolio() {
    return (
        <Card className=" main-content ">
            <Paper className="portfolio-container">
                <CardContent className="carousel">
                    <MobileStepper>
                        <Button>
                            Back
                            <KeyboardArrowLeft />
                        </Button>
                        <Button>
                            Next
                            <KeyboardArrowRight />
                        </Button>
                    </MobileStepper>
                </CardContent>
                <CardContent className="preview">
                    <Typography>Projet 1</Typography>
                </CardContent>
                <CardContent className="form">
                    <Tabs>
                        <Tab label="Description" />
                        <Tab label="L'équipe" />
                        <Tab label="Les stacks" />
                        <Tab label="Les fontionnalités" />
                        <Tab label="Le partage" />
                    </Tabs>
                </CardContent>
            </Paper>
        </Card>
    );
}

export default Portfolio;
