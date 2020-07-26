// import library
import React from "react";
import {
    Paper,
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@material-ui/core";

//import style
import "../App.css";

// init component
const LeftContent = () => {
    return (
        <Paper className="left-menu ">
            <Accordion>
                <AccordionSummary>
                    <Avatar
                        alt="Grégory chamekh"
                        src="../static/image/linkedin _avatar.jpeg"
                    />
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Typography>
                    <Button>plus d'infos</Button>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nesciunt rerum sit maiores blanditiis animi inventore,
                        enim deserunt. Consectetur nihil, reprehenderit
                        aspernatur eligendi aliquid laboriosam et ea explicabo
                        minima, earum iste?
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary>
                    <Typography variant="h1">C.V.</Typography>
                    <Button>Télécharger</Button>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat, et, ipsum dignissimos iusto nam laborum beatae
                    eius, nisi mollitia illum libero eos. Eveniet quae veniam
                    assumenda consequatur, aliquam eligendi? Minus?
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary>
                    <Typography variant="h1">Dispo</Typography>
                    <Button>Plus d'infos</Button>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi optio pariatur eum alias necessitatibus molestias
                    reiciendis? Error dolore nam, ipsam distinctio adipisci,
                    iusto sit totam fuga saepe illum deserunt iure!
                </AccordionDetails>
            </Accordion>
        </Paper>
    );
};

// export component
export default LeftContent;
