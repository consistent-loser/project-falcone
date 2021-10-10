import React from 'react';
import Aux from '../../hoc/Auxilliary'
import classes from './vehicleOption.css';
const vehicleOption = props =>{
    let disabled=false;

    if(props.vehicleCount===0){
        disabled=true;
    }

    return (
        <Aux>
            <input type="radio" className={classes.radio_option} id={props.id} name={props.name} value={props.value} onChange = {props.setVehicle} disabled={disabled} />
            <label for={props.name} className={classes.radio_label}>{`${props.value} (${props.vehicleCount})`}</label><br />   
        </Aux>
    );
    
};
export default vehicleOption;