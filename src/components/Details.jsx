// import core
import React, { useState, useEffect } from "react";

// import Components
import Cv from "./CV";

// import library
import Axios from "axios";
import { Document, Page, pdfjs } from "react-pdf";
import { Frame, Scroll, Stack } from "framer";

// import Material UI
import {
    Paper,
    Box,
    Card,
    CardContent,
    Button,
    CardActions,
} from "@material-ui/core";

// import style
import "../App.css";
import "./style/details.css";

// import files
import pdf from "../static/CV/Grégory_Chamekh_DéveloppeurWebFullstack-junior-v10b.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Details() {
    const [cv, setCv] = useState();
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };
    const onLoadError = (error) => {
        return error.message;
    };
    const getCV = async () => {
        const cvURL = `${process.env.REACT_APP_HOST}/infos/download`;
        await Axios.get(cvURL)
            .then((response) => response.data)
            .then((data) => setCv(data));
    };

    useEffect(() => {
        getCV();
    }, []);

    return (
        <Box className="main">
            <Paper className="details-container">
                <Card className="cv">
                    <CardContent>
                        <Cv />
                        {/* <CardMedia>
                        <Document
                        className="cv"
                        file={pdf}
                        onLoadSuccess={onDocumentLoadSuccess}
                        onLoadError={onLoadError}
                        >
                        <Page pageNumber={1} />
                        </Document>
                        </CardMedia> */}
                    </CardContent>
                </Card>
                <Card className="infos">Disponibilités et infos</Card>
                <Card className="form">Une question?</Card>
            </Paper>
        </Box>
    );
}

export default Details;
