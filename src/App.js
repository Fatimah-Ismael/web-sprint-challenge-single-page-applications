import React, { useState }  from "react";
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import './style.css'
import Homepage from './Homepage';
import PizzaForm from './PizzaForm'
import Form from './Form';
/*const initialFormValues ={
  //dropdown
  size:'',
  //radio buttons
  sauce:'',
  //checkboxes
  mushrooms:false,
  pepperoni:false,
  olives:false,
  pineapple:false,
  bellPeppers:false,
  //text input
  specialInstr:'',
}*/

const App = () => {

  
 return(
  <div className="App">
  <BrowserRouter>
 
  <nav className="order-pizza">
    <h1>BloomTech Eats</h1>
    <Link data-test-id='homepage' to='/'>Homepage </Link>
    <Link data-test-id='order-pizza'to='/pizza'>order pizza </Link>
    <Link data-test-id='cheese' to='/pizza/cheese'> cheese</Link>
    <Link data-test-id='olives' to='/pizza/olives'> olives</Link>
  </nav>

    <Switch>
      <Route exact path='/'>
        <Homepage id='order-pizza'/>
      </Route>
      <Route exact path='/pizza/:id'>
       
      </Route>
      <Route exact path='/pizza'> 
      <PizzaForm id='pizza-form'/>
      </Route>
    </Switch>
  </BrowserRouter>
  </div>
 )
};
export default App;
