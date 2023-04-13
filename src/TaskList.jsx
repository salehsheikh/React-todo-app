import  { useState } from 'react';

function TaskList({tasks,onchangeTask,onDeleteTask}) {
  return (
  <ul>
    {tasks.map((task)=>(
        <li key={task.id}>
        <Task task={task}onChange={onchangeTask} onDelete={onDeleteTask}/>
        </li>
    ))}
  </ul>
  );
}
function Task({task,onChange,onDelete}){
    const[editing,setEditing]=useState(false);
    let Content;
    if(editing){
        Content=(
            <>
            <input 
            value={task.text} 
            onChange={(e)=>{
                onChange({
                    ...task,
                    text:e.target.value,
                });
            }}/>
            <button onClick={()=>setEditing(false)}>
                save
            </button>
            </>
        );
    }else{
        Content=(
            <>
            {task.text}
            <button onClick={()=>setEditing(true)}>Edit</button>
            </>
        );
    }
    return (
        <label>
            <input type="checkbox" 
            checked={task.done}
            onChange={(e)=>{
                onChange({
                    ...task,
                    done:e.target.checked,
                });
            }}
           />
            {Content}
            <button onClick={()=>onDelete(task.id)}>delete</button>
        </label>
        
    );
}
export default TaskList;
