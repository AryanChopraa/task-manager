
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks';
import { useState } from "react"
import AddTask from './components/AddTask';

function App() {
  const[ShowAddtask,setShowAddTask]=useState(false)
  const [tasks,setTasks]=useState([{
    id:"1",
    text:"Complete chemistry practical",
    day:"27th feb 2021",
    reminder:true,}
    ])

    //add task
    const addTask=(task)=>{
      const id=Math.floor(Math.random()*10000)+1
      const newTask={id,...task}
      setTasks([...tasks,newTask])}




    //deleting a task 
    const deleteTask=(id)=>{
      setTasks(tasks.filter(task=>task.id !== id))
      console.log(id)
    }

    //setting reminder for a task 
    const toggleReminder=(id)=>{
      setTasks(tasks.map((task)=>id===task.id?{...task,reminder: !task.reminder }:task)
        )
    }



  return(

    <div className="container">
      <Header title={"Task Tracker"} onAdd={()=>setShowAddTask(!ShowAddtask)} showAdd={ShowAddtask}/>
      { ShowAddtask ? <AddTask addTask={addTask}/>:null}



      {tasks.length >0 ? <Tasks tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder}/> : "No tasks right now !"}

      

    </div>
    
  );
}





export default App;
