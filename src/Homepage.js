import React from "react";
import { useHistory, Link, Switch } from 'react-router-dom';

function Homepage() {
   const history = useHistory();
   //const params = useParams();

   //const match =  useRouteMatch()
   //console.log('match', match)
  
   //const { path, url }= useRouteMatch();
   
   //const handleClick =()=>{
     // history.push('/')
   //}
    const handleClick= e => {
      console.log(e.currentTarget.id);
      history.push('/pizza')
    };
   
   return (
      <div>
    <h1>This is the Home page</h1>
    <p>click the button below to get started</p>
    
    <Link to='/pizza'>
    <button id ="order-pizza"
    onClick={handleClick}>order pizza</button>
    </Link>
    
  
    </div>
   )
}


export default Homepage;