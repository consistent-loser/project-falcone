import React from 'react';
import classes from './mainContainer.css';
const mainContainer= props=>(
    <div className={classes.main}>{props.children}</div>
)
export default mainContainer;