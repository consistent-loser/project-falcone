import React from 'react';
import classes from './vehicleOptions.css';
import VehicleOption from '../../components/vehicleOption/vehicleOption';
const vehicleOptions = props =>{

    const vehicleOptions = props.vehicles.map(vehicle=>{
        return <VehicleOption id={`${vehicle.name}-${vehicle.id}`} name={props.id} value={vehicle.name} setVehicle = {props.setVehicle} vehicleCount={vehicle.total_no}/>
    });

    return (
        <div className={classes.vehicle_options}>
           {vehicleOptions}
        </div>
    );
}

export default vehicleOptions;