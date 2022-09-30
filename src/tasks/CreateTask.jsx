
import React, { useState } from 'react'

const CreateTask = ({addNewTask}) => {
    const [text , setText] = useState('');

  return (
    <div style={{margin:'3rem'}}> 
        <h1>Tasks</h1>
        <input onChange={(e)=> setText(e.target.value)} type='text' placeholder='type your task' value={text}/>
        <button onClick={()=>{
           if(text){
            addNewTask(text);
            setText('')
           }else{
            alert('Invalid Input')
           }
        }}>create Task</button>
    </div>
  )
}

export default CreateTask
