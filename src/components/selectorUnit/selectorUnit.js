import React from 'react';
import PlanetSelector from '../planetSelector/planetSelector';
import VehicleOptions from '../../containers/vehicleOptions/vehicleOptions';
const selectorUnit = props =>{
    return(
        <div className="planets">
            <PlanetSelector planets={props.planets} id={props.id} setDestination={props.setDestination} initial = {props.initial} index={props.index} />
            <VehicleOptions vehicles={props.vehicles} id={props.id} setVehicle = {props.setVehicle} selectedVehicle={props.selectedVehicle}/>
        </div>
    );
    
}
    
export default selectorUnit;