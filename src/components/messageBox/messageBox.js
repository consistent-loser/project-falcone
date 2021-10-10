import React from 'react';
import classes from './messageBox.css';
import FindButtonHolder from '../../containers/findButtonHolder/findButtonHolder';
import Aux from '../../hoc/Auxilliary';
const messageBox = (props)=>{

    let activeClasses=[];
    activeClasses.push(classes.hoc);

    let content=( 
        <Aux>
            <h1>Game Over!</h1>
            <h3>Better luck next time</h3>
        </Aux>);

    if(props.status===1){
        content = ( 
        <Aux>
            <h1 className = {classes.status}>Success!</h1>
            <h3 className= {classes.statusMessage}>Congratulations for finding Falcone. King Shan is mighty pleased</h3>
            <div>
                <h3 className = {classes.timeLabel}>Time Taken:&nbsp;</h3><h2 className={classes.time}>{props.time}</h2>
            </div>
            <div>
           <h3 className = {classes.planetLabel}>Planet Found:&nbsp;</h3><h2 className={classes.planetName}>{props.planet}</h2>
           </div>
           
        </Aux>);
    }
    
    if(props.isVisible){
        activeClasses.push(classes.visible);
    }
    
    return(
        <div className={activeClasses.join(' ')}>
             <div className={classes.message}>
              {content}
              <FindButtonHolder clicked = {props.closed}>Play Again</FindButtonHolder>
             </div>
            
        
        </div>
    );
    
};
export default messageBox;
