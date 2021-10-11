import React from 'react';
import Aux from '../../hoc/Auxilliary'
import classes from './vehicleOption.css';
const vehicleOption = props =>{

   if(props.disabled==='true'){
       return (
        <Aux>
            <input type="radio" className={classes.radio_option} id={props.id} name={props.name} value={props.value} onChange = {props.setVehicle} disabled/>
            <label for={props.name} className={classes.radio_label}>{`${props.value} (${props.vehicleCount})`}</label><br />   
        </Aux>
       )
   }
    return (
        <Aux>
            <input type="radio" className={classes.radio_option} id={props.id} name={props.name} value={props.value} onChange = {props.setVehicle} />
            <label for={props.name} className={classes.radio_label}>{`${props.value} (${props.vehicleCount})`}</label><br />   
        </Aux>
    );
    
};
export default vehicleOption;