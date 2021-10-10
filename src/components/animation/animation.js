import React from 'react';
import classes from './animation.css';
const animation=()=>(
    <div className={classes.blockHolder}>
        <div className={classes.block} id={classes.b1}></div>
        <div className={classes.block} id={classes.b2}></div>
        <div className={classes.block} id={classes.b4}></div>
        <div className={classes.block} id={classes.b3}></div>
    </div>
);
export default animation;