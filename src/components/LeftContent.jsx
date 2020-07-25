// import library
import React from "react";
import { Paper } from "@material-ui/core";

//import style
import "../App.css";

// init component
const LeftContent = () => {
    return (
        <Paper className="left-menu">
            <img
                alt="Grégory chamekh"
                src="../static/image/linkedin _avatar.jpeg"
            />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt rerum sit maiores blanditiis animi inventore, enim
                deserunt. Consectetur nihil, reprehenderit aspernatur eligendi
                aliquid laboriosam et ea explicabo minima, earum iste?
            </p>
        </Paper>
    );
};

// export component
export default LeftContent;
