import React, {Component} from 'react';
import axios from 'axios';
import classes from './FindFalcone.css';
import Heading from '../../components/heading/heading';
import SelectorUnit from '../../components/selectorUnit/selectorUnit'
import MainContainer from '../mainContainer/mainContainer';
import TimeContainer from '../timeContainer/timeContainer';
import FindButtonHolder from '../findButtonHolder/findButtonHolder'
import MessageBox from '../../components/messageBox/messageBox';
import Aux from '../../hoc/Auxilliary';
import Header from '../../components/header/header';
import Loader from '../../components/loader/loader';
class FindFalcone extends Component{


    state={
        initial:true,
        planets:[],
        vehicles:[],
        token:'',
        isWin:0,
        showResult:0,
        options:[
            {
                id:'op1',
                index:1,
                destination:'',
                vehicle:[],
                selectedVehicle:''
            },
            {
                id:'0p2',
                index:2,
                destination:'',
                vehicle:[],
                selectedVehicle:''
            },
            {
                id:'op3',
                index:3,
                destination:'',
                vehicle:[],
                selectedVehicle:''
            },
            {
                id:'op4',
                index:4,
                destination:'',
                vehicle:[],
                selectedVehicle:''
            },
        ],

        error:0,

        timeTaken:0,
        planetFound:'',
        visible:1

    }

    initiator = () => {
        axios.get('https://findfalcone.herokuapp.com/planets')
        .then(response => {
            //console.log(response.data);
            this.setState({planets:response.data});
        });  //catch

        axios.get('https://findfalcone.herokuapp.com/vehicles')
        .then(response => {
            //console.log(response.data);
            this.setState({vehicles:response.data});
        }); //catch
       
        axios({
            method: 'post',
            url: 'https://findfalcone.herokuapp.com/token',
            headers:{
                'Accept':'application/json'
            }
          }).then(response=>{
              //this.setState({token:response.data.token});
                const data = response.data.token;
                this.setState({token:data});
                
          }); //catch


         

    }


    componentDidMount(){
        this.setState({visible:0});
        this.initiator();
          
    }

    setDestinationHandler=(event,index)=>{
        try{
            let temp = [...this.state.options];
            let eligible_vehicles=[];
            let vehicles=[...this.state.vehicles];
            const planetIndex = this.state.planets.findIndex(planet => planet.name===event.target.value);
            const selectedPlanet = this.state.planets[planetIndex];
            temp[index].destination = selectedPlanet
            for(let i=0;i<vehicles.length;i++){
                if(vehicles[i].max_distance>=selectedPlanet.distance){
                    eligible_vehicles.push(vehicles[i]);
                }
            }


            temp[index].vehicle=eligible_vehicles;
            const initial = this.state.initial;
            if(initial===true){
              this.setState({initial:!initial});  
            }
            this.setState({options:temp});
        }catch(err){
            alert("something went Wrong");
        }
    }

    setVehicleHandler = (event,index) =>{

        try{
            let temp= [...this.state.options];
            const tempVehicles=[...this.state.vehicles];
            // console.log(tempVehicles);
            const vehicleIndex=tempVehicles.findIndex(vehicle => vehicle.name===event.target.value);
            let number_of_vehicle = tempVehicles[vehicleIndex].total_no;
            // console.log(tempVehicles);


            const oldVehicleIndex = tempVehicles.findIndex(vehicle => vehicle.name===temp[index].selectedVehicle);
            let oldVehicleCount = -1;
            if(oldVehicleIndex!==-1){
                oldVehicleCount=tempVehicles[oldVehicleIndex].total_no;
                console.log(`${tempVehicles[oldVehicleIndex].name} : ${tempVehicles[oldVehicleIndex].total_no}`);
            }

            if(number_of_vehicle===0){
                alert("Vehicle out of Stock, please select another vehicle")
                return;
            }
            

            else{
                temp[index].selectedVehicle = event.target.value;
                number_of_vehicle = number_of_vehicle-1;
                if(oldVehicleCount!==-1){
                    oldVehicleCount=oldVehicleCount+1;
                    tempVehicles[oldVehicleIndex].total_no=oldVehicleCount;
                }
                tempVehicles[vehicleIndex].total_no=number_of_vehicle;
                const time = temp[index].destination.distance/tempVehicles[vehicleIndex].speed;
                this.setState({options:temp, vehicles:tempVehicles, timeTaken:time});
            }

        } catch(err){ alert("something went wrong")}

       
    }

    getFinalData =()=>{
        try{
            const tempOptions = [...this.state.options];
            let planetNames=[];
            let vehicleNames=[];
            for(let i=0;i<tempOptions.length;i++){
                if(tempOptions[i].destination.name===''||tempOptions[i].selectedVehicle===''){
                    alert('Some fields are not Selected');
                    return;
                }
                planetNames.push(tempOptions[i].destination.name);
                vehicleNames.push(tempOptions[i].selectedVehicle);
            }
            
            // finalData={
            //     token:this.state.token,
            //     planet_names:planetNames,
            //     vehicle_names:vehicleNames
            // }
            // console.log(this.state.token);
            // console.log(planetNames);
            // console.log(vehicleNames);
            axios({
                method: 'post',
                url: 'https://findfalcone.herokuapp.com/find',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                data:JSON.stringify(
                        {token:this.state.token,
                        planet_names:planetNames,
                        vehicle_names:vehicleNames
                        }
                    )
                
                
            }).then(response=>{
                //this.setState({token:response.data.token});
                console.log(response.data.status);
                if(response.data.status==='success'){
                    this.setState({isWin:1});
                    this.setState({planetFound:response.data.planet_name});
                }
                this.setState({showResult:1});
            }).catch(err=>console.log(err));
        }catch(err){alert("something went wrong");}
        
        
    }

    closeMessage = () =>{
        let isVisible=this.state.showResult;
        isVisible=!isVisible;
        this.setState({showResult:isVisible});
    }

    resetStateHandler = () => {

        try{
            this.setState({ 
                initial:true,
                planets:[],
                vehicles:[],
                token:'',
                isWin:0,
                showResult:0,
                options:[
                    {
                        id:'op1',
                        index:1,
                        destination:'',
                        vehicle:[],
                        selectedVehicle:''
                    },
                    {
                        id:'0p2',
                        index:2,
                        destination:'',
                        vehicle:[],
                        selectedVehicle:''
                    },
                    {
                        id:'op3',
                        index:3,
                        destination:'',
                        vehicle:[],
                        selectedVehicle:''
                    },
                    {
                        id:'op4',
                        index:4,
                        destination:'',
                        vehicle:[],
                        selectedVehicle:''
                    },
                ],
        
                error:0,
        
                timeTaken:0,
                planetFound:''
            });
            this.setState({showResult:0});
            this.initiator();
        }catch(err){alert("something went wrong");}
        

    }


    render(){
        const selectorUnit = this.state.options.map((id,index) =>(
            <SelectorUnit id={id.id} key={id.id} planets={this.state.planets} vehicles={this.state.options[index].vehicle} setDestination={(event) =>this.setDestinationHandler(event,index)} setVehicle ={(event) =>this.setVehicleHandler(event,index)} initial = {this.state.initial} index={id.index}/>
        ));
        return(
            <Aux>
                <Loader visible = {this.state.visible} />
                <Header clicked ={this.resetStateHandler}/>
                <MessageBox status={this.state.isWin} time={this.state.timeTaken} planet={this.state.planetFound} closed={this.resetStateHandler} isVisible={this.state.showResult} />
                 <div class={classes.container}>
                    <Heading />
                    <MainContainer>
                        {selectorUnit}
                        <TimeContainer time={this.state.timeTaken}/>
                    </MainContainer>
                    <FindButtonHolder clicked = {this.getFinalData} >Find Falcone</FindButtonHolder>
                </div>
            </Aux>
        );
    }
}

export default FindFalcone;