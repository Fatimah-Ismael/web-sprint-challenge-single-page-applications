import React, { useState, useEffect } from 'react'
//import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios';
import schema from './Schema';
import * as yup from 'yup';

const initialFormValues = {
   inputName:'',
   specialText:'',}

   
const PizzaForm = (props) => {
  
   //const history = useHistory();
  
   const { values, submit} = props 
    //console.log(props)
    const onSubmit = event => {
        event.preventDefault()
        axios.post('https://reqres.in/api/orders', {...form})
         .then((request) => {
            setForm(request.data)
            setForm(initialFormValues)
         })
         .catch((err)=>{console.log(err)})
         submit()
        
    }
    const [form, setForm] = useState(initialFormValues);
    //for enabling submit button///
    const [disabled, setDisabled] = useState(true);
    const [ errors, setErrors] = useState(initialFormValues);

    const setFormErrors= (name, value)=>{
      yup.reach(schema, name).validate(value)
      .then(()=> setErrors({ ...errors, [name]:'' }))
      .catch(err => setErrors({ ...errors, [name]: err.errors[0]}))
    }
    const onChange = event => {
        const { name, checked, type, value } = event.target
        const valueTouse =type === 'checkbox'? checked : value

        setFormErrors(name, valueTouse)

        setForm({...form, [name]:valueTouse})
       // console.log(event.target.name, event.target.value)
    } 
    useEffect(()=> {
      schema.isValid(form).then(valid=>setDisabled(!valid))
    }, [form])

   /* const changeHandler= (e) => {
      //// to see each keystroke //////
      //console.log(e.target.name, e.target.value)
      const { name, value, type }= e.target
      //console.log(type)- changes based on whats going on in form, what is clicked.typed
      setInputName({...inputName, [name]: value})
    }*/

       // const [disabled, setDisabled] = useState(true);

   // const [inputName, setInputName] = useState(initialFormValues);
     // console.log(inputName)
     /* useEffect(()=>{
         setInputName({})
      }, [])*/

    return (
     
       <div id='pizza-form'>
        
        <form id='pizza-form' onSubmit={onSubmit}>
            <div id='pizza-form'></div> 
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
                checked={form.sauce==='red'}
                />
             </label>
             <label>white
                <input
                type='radio'
                name='sauce'
                value='white'
                onChange={onChange}
                checked={form.sauce ==='white'}
                />
             </label>
             <h3>Add toppings</h3>
             <label>mushrooms
                <input
                type='checkbox'
                name='mushrooms'
                checked={form.mushrooms}
                onChange={onChange}
                />
             </label>
             <label>pepperoni
                <input 
                type='checkbox'
                name='pepperoni'
                checked={form.pepperoni}
                onChange={onChange}
                />
             </label>
             <label>Olives
                <input 
                type='checkbox'
                name='olives'
                checked={form.olives}
                onChange={onChange}
                />
             </label>
             <label>pineapple
                <input 
                type="checkbox"
                name='pineapple'
                checked={form.pineapple}
                onChange={onChange}
                />
             </label>
             <label>bell peppers
                <input 
                type='checkbox'
                name='bellPeppers'
                checked={form.bellPeppers}
                onChange={onChange}
                />
             </label>
             <h3>Special instructions</h3>
             <label id='special-text'>special instructions
                <input 
                name='specialText'
                type='text'
                maxLength='50'
                placeholder='special instructions'
                value={form.specialText}
                onChange={onChange}
                />
             </label>
             <br/>
             <label >name 
               <div style={{color: 'red'}}> 
                  <div>{errors.inputName}</div><div>{errors.specialText}</div>
               </div>
                <input 
                id='name-input'
                name='inputName'
                type='text'
                maxLength='50'
                placeholder='name input'
                value={form.inputName}
                onChange={onChange}
                />
             </label>
              <br/>
              <br/>
              <button disabled ={disabled} >submit</button>
        </form>
      </div>  
    )

}

export default PizzaForm;

