import React from "react";
import { useHistory, useParams, useRouteMatch, Link, Switch } from 'react-router-dom';

function Homepage() {
   const history = useHistory();
   const params = useParams();

   const match =  useRouteMatch()
   console.log('match', match)
  
   const { path, url }= useRouteMatch();
   
    const handleClick= e => {
      console.log(e.currentTarget.id);
    };
   return (
      <div id="#order-pizza">
    <h1>This is the Home page</h1>
    <p>click the button below to get started</p>
    <Switch>
    <Link to='/pizza'>
    <button id="order-pizza"
    onClick={handleClick}>#order-pizza</button>
    </Link>
    <button 
    id='#order-pizza'
    onClick={()=>history.push('/')}>2nd button</button>
    </Switch>
    </div>
   )
}


export default Homepage;