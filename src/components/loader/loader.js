import React from 'react';
import classes from './loader.css';
import Animation from '../animation/animation';
const loader=(props)=>{

    let content=null;

    if(props.visible===1){
        content=(
            <div className={classes.loader}>
                <div className= {classes.heading}><h1>Finding Falcone</h1></div>
                <div className = {classes.animationCanvas}>
                    <div className={classes.loading}><h2>Loading</h2></div>
                    <Animation />
                </div>
            </div>
        );
    }

return content;
    
};

export default loader;