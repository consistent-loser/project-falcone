import React from 'react';
import PlanetSelector from '../planetSelector/planetSelector';
import VehicleOptions from '../../containers/vehicleOptions/vehicleOptions';
const selectorUnit = props =>{
    return(
        <div class="planets">
            <PlanetSelector planets={props.planets} id={props.id} setDestination={props.setDestination} initial = {props.initial} />
            <VehicleOptions vehicles={props.vehicles} id={props.id} setVehicle = {props.setVehicle}/>
        </div>
    );
    
}
    
export default selectorUnit;