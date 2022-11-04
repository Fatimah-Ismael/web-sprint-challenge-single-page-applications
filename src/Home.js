import React from "react";
import { useHistory } from 'react-router-dom';

function Home() {
    const history = useHistory();

    const orderPizza = () =>{
        history.push('/');
    }
    
    return (
        <div className='home-wrapper'>
            <h1>do you like pizza?</h1>
            <button
            onClick={orderPizza}
            className='order pizza button'
            />
        </div>
    );
}

export default Home;