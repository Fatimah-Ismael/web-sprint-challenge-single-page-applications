import React, { useState, useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom'
const initialFormValues = {
    type:'',
    inputname:'',
}
function Form() {
    const [form, setForm] = useState(initialFormValues)
    const {id} = useParams()
    console.log(form)
    const changeHandler = (e) => {
        console.log(e.target.name, e.target.value)

        const { name, value } = e.target
        setForm({...form, [name]: value})
    }
   
    return (
        <div>
            <img src={'/Assets/Pizza.jpg'} alt='pizza'/>
            Order Form for {id}
            <form>
                <label>
                    <p>Full Name</p>
                    <input type= 'text' name='inputname' placeholder="#name-input" value={form.inputname} onChange={changeHandler} />

                </label>
                <button type='submit'> Submit order</button>
            </form>
        </div>
    )
}

export default Form;