import React from "react";
import img from '../../../assets/images/logo.png'

import classes from "./Logo.module.css";

const logo = (props) => {
    return (
        <img src={img} alt="recipe" className={classes.Logo} />
    );
}

export default logo;