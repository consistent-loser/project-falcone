import React from 'react';
import Aux from '../../hoc/Auxilliary';
import Footer from '../footer/footer';
const layout=(props)=>(
    <Aux>
        {props.children}
        <Footer />
    </Aux>
);

export default layout;