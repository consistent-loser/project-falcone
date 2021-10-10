import React from 'react';
import classes from './findButtonHolder.css';
const findButtonHolder = props => (
    <div className={classes.find_button_holder}>
        <button className={classes.find_button} onClick={props.clicked}>{props.children}</button>
    </div>
);
export default findButtonHolder;