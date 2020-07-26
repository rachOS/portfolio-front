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
} from "@material-ui/core";

//import style
import "../App.css";

// init component
const LeftContent = () => {
    return (
            <Paper className="left-menu ">
                <Card>
                    <CardContent>
                        <Avatar
                            alt="Grégory chamekh"
                            src="../static/image/linkedin _avatar.jpeg"
                        />
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nesciunt rerum sit maiores blanditiis animi
                            inventore, enim deserunt. Consectetur nihil,
                            reprehenderit aspernatur eligendi aliquid laboriosam
                            et ea explicabo minima, earum iste?
                        </Typography>
                        <CardActions>
                            <Button>plus d'infos</Button>
                        </CardActions>
                    </CardContent>
                    <CardContent>
                        <Typography variant="h1">C.V.</Typography>
                        <CardActions>
                            <Button>Télécharger</Button>
                        </CardActions>
                    </CardContent>
                    <CardContent>
                        <Typography variant="h1">Dispo</Typography>
                        <CardActions>
                            <Button>Plus d'infos</Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </Paper>
    );
};

// export component
export default LeftContent;
