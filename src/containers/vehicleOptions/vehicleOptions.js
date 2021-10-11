import React from 'react';
import classes from './vehicleOptions.css';
import VehicleOption from '../../components/vehicleOption/vehicleOption';
const vehicleOptions = props =>{

    const vehicleOptions = props.vehicles.map(vehicle=>{
        let disabled='false';
        if(vehicle.total_no===0 && props.selectedVehicle!==vehicle.name){disabled='true'}
        return <VehicleOption id={`${vehicle.name}-${vehicle.id}`} name={props.id} value={vehicle.name} setVehicle = {props.setVehicle} vehicleCount={vehicle.total_no} disabled={disabled} />
    });

    return (
        <div className={classes.vehicle_options}>
           {vehicleOptions}
        </div>
    );
}

export default vehicleOptions;