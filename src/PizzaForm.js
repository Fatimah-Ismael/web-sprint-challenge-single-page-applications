import React from 'react'
import { useHistory } from 'react-router-dom'



const PizzaForm = (props) => {
   const history = useHistory();
   const orderPizza = () =>{
      history.push('/pizza');
  }
    const {
        values, submit, change, disabled, errors,
    } = props
    console.log(props)
    const onSubmit = event => {
        event.preventDefault()
        submit()
    }
    const onChange = event => {
        const { size, value, checked, type } = event.target
        const valueToUse =type === 'checkbox'? checked : value
        
    }
    return (
       
        <form className='pizza-form' onSubmit={onSubmit}>
            <div className='pizza-details'></div> 
             <h2>Build your own pizza</h2>
             <button disabled ={disabled}>submit</button>
             <label>choose size
                <select
                
                name='#size-dropdown'
                >
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
               // checked={values.mushrooms}
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
                onChange={onChange}
                />
             </label>
             <label>pineapple
                <input 
                type="checkbox"
                name='pineapple'
                //checked={values.pineapple}
                onChange={onChange}
                />
             </label>
             <label>bell peppers
                <input 
                type='checkbox'
                name='bellPeppers'
                //checked={values.bellPeppers}
                onChange={onChange}
                />
             </label>
             <h3>Special instructions</h3>
             <label>name input
                <input 
                id='specialInstr'
                name='#name-input'
                type='text'
                maxLength='50'
                placeholder='#name-input'
                />
             </label>
             <button
            onClick={orderPizza}
            className='order pizza button'
            />
        </form>
       
    )

}

export default PizzaForm;