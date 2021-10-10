import React from 'react';
import classes from './footer.css';
import problem from '../../assets/problem.pdf'
const footer=props=>(
    <footer className={classes.footer}>
       <p>Coding problem:&nbsp;</p><a href={problem} target="_blank"> www.geektrust.in/finding-falcone</a>
    </footer>
);

export default footer;