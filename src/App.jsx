import  { useReducer } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import taskReducer from './taskReducer';
function App() {
  const[tasks,dispatch]=useReducer(taskReducer,initialTasks);
  function handleAddTask(text){
    dispatch({
      type:'added',
      id:nextId++,
      text:text,
    });
  }
    function handleChangedTask(task){
      dispatch({
        type:'changed',
        task:task,
      });
    }
    function handleDeleteTask(taskId){
      dispatch({
        type:'deleted',
        id:taskId,
      });
    }
  
  return (
    <>
    <h1> add your tasks for today</h1>
      <AddTask onAddTask={handleAddTask}/>
      <TaskList
      tasks={tasks}
      onchangeTask={handleChangedTask}
      onDeleteTask={handleDeleteTask}/>
    </>
  );
}
let nextId = 3;
const initialTasks = [
  {id: 0, text: 'offer a prayer', done: true},
  {id: 1, text: 'playing cricket', done: false},
  {id: 2, text: 'watching movies', done: false},
];
export default App;
