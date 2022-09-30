
import React, { useState } from 'react'

const From = () => {

  const [formState, setFormState] = useState({
    name:'', email: '', phone:''
  });

 const changeHandler = (event) =>{
    setFormState({...formState, [event.target.name]: event.target.value})
 }


 const handleSubmit = (event) =>{
    event.preventDefault()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
            <label>what is your Name: </label>
            <input value={formState.name}
              onChange={changeHandler}
              type="text" name='name' placeholder='John Doe' />
        </div>
        <div>
            <label>what is your Email: </label>
            <input value={formState.email} 
               onChange={changeHandler}
               type="email" name='email' placeholder='John Doe' />
        </div>
        <div>
            <label>what is your Phone No.? </label>
            <input value={formState.phone} 
             onChange={changeHandler}
             type="tel" name='phone' placeholder='01406272555' />
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>
      </form>
    </>
  )
}

export default From