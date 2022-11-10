import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios';

const initialFormValues = {
   name:'',
   specialText:'',}



const PizzaForm = (props) => {
   //console.log(useParams())
   const history = useHistory();
  // const orderPizza = () =>{
     // history.push('/pizza');
 // }
    const {
        values, submit, change, disabled, errors,
    } = props
    //console.log(props)
    const onSubmit = event => {
        event.preventDefault()
        axios.post('https://reqres.in/api/orders', {...inputName})
         .then((request) => {
            console.log(request.data)
            setInputName(initialFormValues)
         })
         .catch((err)=>{console.log(err)})
       
        submit()
    }
   
    const onChange = event => {
        const { name, checked, type } = event.target
        const value =type === 'checkbox'? checked : value
        console.log(event.target.name, event.target.value)
    } 
    
    const changeHandler= (e) => {
      //// to see each keystroke //////
      console.log(e.target.name, e.target.value)
      const { name, value, type }= e.target
      //console.log(type)- changes based on whats going on in form, what is clicked.typed
      setInputName({...inputName, [name]: value})
    }

        //const [disabled, setDisabled] = useState(true);

    const [inputName, setInputName] = useState(initialFormValues);
     // console.log(inputName)
     /* useEffect(()=>{
         setInputName({})
      }, [])*/

    return (
       <div id='pizza-form'>
        <form id='#pizza=form' onSubmit={onSubmit}>
            <div id='#pizza-form'></div> 
             <h2>Build your own pizza</h2>
             
             <label id='size-dropdown'>choose size
                <select>
                    <option value= ''>select size</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                </select>
             </label> 
             <h3>Choice of sauce</h3>
             <label>Red
                <input
                type='radio'
                name='sauce'
                value='red'
                onChange={onChange}
                //checked={values.sauce==='red'}
                />
             </label>
             <label>white
                <input
                type='radio'
                name='sauce'
                value='white'
                onChange={onChange}
                //checked={values.sauce ==='white'}
                />
             </label>
             <h3>Add toppings</h3>
             <label>mushrooms
                <input
                type='checkbox'
                name='mushrooms'
                checked={inputName.mushrooms}
                onChange={onChange}
                />
             </label>
             <label>pepperoni
                <input 
                type='checkbox'
                name='pepperoni'
               // checked={values.pepperoni}
                onChange={onChange}
                />
             </label>
             <label>Olives
                <input 
                type='checkbox'
                name='olives'
                //checked={values.olives}
                onChange={changeHandler}
                />
             </label>
             <label>pineapple
                <input 
                type="checkbox"
                name='pineapple'
                //checked={values.pineapple}
                onChange={changeHandler}
                />
             </label>
             <label>bell peppers
                <input 
                type='checkbox'
                name='bellPeppers'
                checked={inputName.bellPeppers}
                onChange={changeHandler}
                />
             </label>
             <h3>Special instructions</h3>
             <label id='special-text'>special instructions
                <input 
                //id='#special-text'
                name='specialText'
                type='text'
                maxLength='50'
                placeholder='special instructions'
                value={inputName.specialText}
                onChange={changeHandler}
                />
             </label>
             <br/>
             <label id='name-input'>name input
                <input 
                name='inputName'
                type='text'
                maxLength='50'
                placeholder='#name-input'
                value={inputName.inputName}
                onChange={changeHandler}
                />
             </label>
              <br/>
              <br/>
            <button disabled ={disabled}>submit</button>
        </form>
      </div>  
    )

}

export default PizzaForm;