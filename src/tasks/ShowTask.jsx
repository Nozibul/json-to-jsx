import React from 'react'

const ShowTask = ({tasks, toggleComplete}) => {
  return (
    <>
       {
        tasks.length > 0 ? (
        <ul>
           {
              tasks.map((task)=>(
                <li key={task.id}
                 onClick={()=> toggleComplete(task.id)}
                 style={{textDecoration: task.isCompleted ? 'line-through' : 'none'}}
                >{task.text}</li>
             ))
           }
         </ul> 
        ) : <p> Task Not Found</p>
       }
    </>
  )
}

export default ShowTask