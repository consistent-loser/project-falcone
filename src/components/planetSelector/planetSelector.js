import React from 'react';
import Aux from '../../hoc/Auxilliary';
import classes from './planetSelector.css';
const planetSelector = props =>{
  const disabled = props.initial===true?false:true;
  let planets = props.planets.map(planet=>(
    <option value={planet.name}>{planet.name}</option>
   ));

   const no_selected = <option  disabled={disabled} >Select a planet</option>;
    planets = [no_selected,...planets];
   return(
    <Aux>
      <label for="dest-1" style={{color:'white'}}>Destination&nbsp;{props.index}</label> <br /> 
      <select name="planets" id={props.id} className={classes.destination_selector} onChange={props.setDestination}>
        {planets}                 
      </select>
    </Aux>
   );
    
}

export default planetSelector;