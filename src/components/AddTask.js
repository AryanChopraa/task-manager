import { useState } from "react"


const AddTask = ({addTask}) => {
    const [text,setText] = useState("")
    const [day,setDay] = useState("")
    const [reminder,setReminder] = useState(false)


const onSubmit = (e) =>{
    e.preventDefault()
    
    if(!text || !day){
        alert("Please complete the form before submitting")
        return

    }
    addTask({text,day,reminder})
    setText('')
    setDay('')
    setReminder(false)

}

  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Task</label>
            <input type="text" placeholder="Add Task" value={text} onChange={(e)=>setText(e.target.value)} />
        </div>

        <div className="form-control">
            <label>{`Date & time`}</label>
            <input type="text" placeholder={"Add date & time"} value={day} onChange={(e)=>setDay(e.target.value)}/>
        </div>

        <div className="form-control form-control-check">
            <label>Mark as Important</label>
            <input type="checkbox" value={reminder} checked={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
        </div>
        <input type="submit" value="Save Task"className="btn btn-block"  />

    </form>
  )
}

export default AddTask