import React from 'react';
import classes from './timeContainer.css';
const timeContainer = props =>{
    return(
        <div className={classes.time_container}>
            <h3 >Time Taken</h3>
            <h2 className={classes.time}>{props.time}</h2>
        </div>
    );
    
};

export default timeContainer;