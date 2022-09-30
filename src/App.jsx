
       // JSON to JSX


import { useState } from 'react';
import {socialIcons, products} from './data'
import CreateTask from './tasks/CreateTask';
import shortid from 'shortid'
import ShowTask from './tasks/ShowTask';
import From from './tasks/From';


const App =()=>{

  const [tasks, setTasks] = useState([]);
  const [visibility, setVisibility] = useState('all');


  const addNewTask = (text) =>{
  
   const task = {
     text,
     isCompleted: false,
     createdAt: new Date(),
     id: shortid.generate()
   }

    setTasks([task, ...tasks]); 
  }

 
  const toggleComplete = (id) =>{
      const newTasks = tasks.map((items)=>{
          if(items.id === id){
            items.isCompleted = !items.isCompleted ; 
          };
          return items ;
      });
      setTasks(newTasks);
  };


  const handleVisibility = (text) =>{
     setVisibility(text)
  }


const getFilterTasks =()=>{
  
  if(visibility === 'completed') return tasks.filter((item)=> item.isCompleted )
  if(visibility === 'incomplete') return tasks.filter((item)=> !item.isCompleted)
   return tasks
}


  return (
    <>
      <CreateTask  addNewTask={addNewTask}/>
       <div>
          <button onClick={()=> handleVisibility('all')}>all</button>
          <button onClick={()=> handleVisibility('completed')}>completed</button>
          <button onClick={()=> handleVisibility('incomplete')}>not completed</button>
          <div>selected visibility: {visibility}</div>
       </div>
      <ShowTask tasks={getFilterTasks()} toggleComplete ={toggleComplete}/>
      

     <div style={{ disPaly:'flex', gap:'1rem'}}>     
      {/* <FontAwesomeIcon icon={['fab', 'github']} /> */}
      {/* <FontAwesomeIcon icon={['fab', 'apple']} /> */}

      {socialIcons.map((item)=>(
        // <div key= {item.id} style={{backgroundColor: item.color}}>
        //     <FontAwesomeIcon icon={['fab', item.icon]} />
        //     <span>{item.tooltip}</span>
        // </div>
        <div key= {item.id}>
          <ItemIcon item={item}/>
        
        </div>
      ))}



      <h1>bread Crumps</h1>
      <div className='breadcrump'>
         {products.breadcrump.map((product, index)=>(
          <>
           <a href={product.link} style={{display:'inline-block'}}>{product.text}</a>
           {index < products.breadcrump.length-1 && (<span>{' / '}</span>)}
            {/* <h2>{products.title}</h2> */}
            
          </>
         ))}
      </div>
     </div>


    {/* from */} 
    <br /> 
    <From /> <br />
    

    </> 
  )
};


export default App;
