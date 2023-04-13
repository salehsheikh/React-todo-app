import  { useState } from 'react';

function AddTask({onAddTask}) {
    const[text,setText]=useState('');
  return (
    <>
      <input type="text" 
      value={text}
      onChange={(e)=>setText(e.target.value)}
       />
       <button disabled={!text}
        onClick={()=>{
        setText('');
        onAddTask(text);
       }}>
        Add
       </button>
    </>
  );
}

export default AddTask;
