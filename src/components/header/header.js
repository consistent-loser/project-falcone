import React from 'react';
import classes from './header.css';
const header = props=>(
    <header className={classes.header}>
       <h1 className={classes.main_heading}>Finding Falcone</h1>
       <div className={classes.tabs}>
           <ul className={classes.tabs}>
               <li onClick = {props.clicked}>Reset</li>
               <li><a href = "https://www.geektrust.in/coding-problem/frontend/space">Geek Trust Home</a></li>
           </ul>
       </div>
   </header>
);

export default header;