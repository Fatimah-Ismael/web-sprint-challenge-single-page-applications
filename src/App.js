import React, { useState }  from "react";
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import './style.css'
import { useHistory } from 'react-router-dom';
import Home from './Home';
import PizzaForm from './PizzaForm'
import Click from './click';
const initialFormValues ={
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
}



const App = () => {
  const [ pizza, setPizza ] = useState([
    {
      size:'small',
      sauce:'red',
      toppings:'mushroom',
      gluten: false,
      instructions:'anything else to add'
    }
  ])
  console.log('bloomtech pizza');
  return (
    
      <BrowserRouter>
      <div className="'App">
        <nav> 
          <h1 className="header">Lambda Eats</h1>
          <div className="nav-links">
          <li>
          <Link to= '/'>Home</Link>
          </li>
          <li>
          <Link to='/pizza'>order-pizza</Link>
          </li>
          </div>
        </nav> 
    
        <Switch>
        <Route exact path={'/order-pizza/:id'}/>
        
        <Route exact path='/pizza'></Route>
         
          <PizzaForm />
        <Route exact path='/'/>
          <Home />
        
        </Switch>
      </div>
    
    </BrowserRouter>
  
  );
};
export default App;
