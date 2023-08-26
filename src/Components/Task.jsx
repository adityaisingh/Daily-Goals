import React from 'react'

const  Task = ({Title,description,deleteTask,index}) => {
  return (
    <div className='task'>
    <div>
         <h4>{Title}</h4>
         <span>{description}</span>
    </div>
    <button onClick={() => deleteTask(index)}>-</button>
    </div> 
  )
}

export default  Task

