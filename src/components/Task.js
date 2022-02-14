import {FaTimes,FaStar} from 'react-icons/fa'


const Task = ({task,deleteTask,toggleReminder}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder':' '}`} >
        <h3>{task.text} <FaTimes style={{color:"red", cursor:"pointer"}} onClick={()=>deleteTask(task.id)}/>
        </h3>
        <h5>{task.day} <FaStar style={{color:"#DAA520", cursor:"pointer"}} onClick={() => toggleReminder(task.id)}/> </h5>
    </div>
  )
}

export default Task