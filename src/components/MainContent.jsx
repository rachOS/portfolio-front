// import library
import React from "react";
import { Paper, Typography ,Card} from "@material-ui/core";

// import style
import "../App.css";
import "./style/maint-content.css"

// init component
const MainContent = () => {
    return (
        <Paper className="main-content preview-container">
            <Typography variant="h1">Projets récents</Typography>
            <Card className="content">content 1</Card>
            <Card className="content">content 2</Card>
            <Card className="content">content 3</Card>
        </Paper>
    );
};

// export component
export default MainContent;
