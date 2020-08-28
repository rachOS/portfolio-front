// import core
import React, { Fragment } from "react";

// import Components
import Cv from "./CV";
import Availability from "./Availability";

// import style
import "../responsive.css"

function Details() {
    return (
        <Fragment>
            <Cv />
            <Availability />
        </Fragment>
    );
}

export default Details;
