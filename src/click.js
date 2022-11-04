import React from "react";
import { useHistory } from 'react-router-dom';

function Click() {
    const history = useHistory();

    const orderPizza = () =>{
        history.push('/pizza');
    }
    
    return (
        <div className='home-wrapper'>
            <h1>do you like pizza?</h1>
            <button
            onClick={orderPizza}
            className='order pizza button'> order pizza</button>
            
        </div>
    );
}

export default Click;