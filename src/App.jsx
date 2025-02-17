import { useState } from "react"

function App() {
  const [todoList,setTodoList]=useState([
    {id:1,taskName:"Learn useRef",status:false},
    {id:2,taskName:"Go to Gym",status:false},
    {id:3,taskName:"Build todo web app",status:true},
  ])
  const [newTask,setNewTask]=useState("")
  //add task
  const addTask=(e)=>{
    e.preventDefault()
    if (!newTask) {
      alert("Enter task")
    } else {
      let newId=todoList.length + 1
      let newEntry={id:newId,taskName:newTask,status:false}
      setTodoList([...todoList,newEntry])
      setNewTask("")
    }
  }

  //complete task
  const doneTask=(id)=>{
    setTodoList(todoList.map((item)=>
    item.id===id?{...item,status:!item.status}:item))
  }

  //delete task
  const deleteTask=(id)=>{
    setTodoList(todoList.filter((item)=>{
      return item.id !== id
    }))
  }
  return (
   <div className="bg-gradient-to-b from-fuchsia-800 to-violet-950 h-screen flex flex-col items-center">
    <div className="pt-21">
    <form className="bg-white rounded-md p-3">
      <input value={newTask} onChange={(e)=>{setNewTask(e.target.value)}} type="text" className="border-none outline-none py-2 px-3" placeholder="
      Learn useRef" />
      <button onClick={addTask} className="bg-fuchsia-800 text-white py-1 px-7 rounded-md">Add</button>
    </form>
    </div>
    <div className="flex flex-wrap gap-3 p-3 pt-9">
      {todoList.map((item,index)=>{
        return(
          <div className="bg-slate-800 rounded-md p-2 " key={item.id}>
           <div className="text-white flex flex-col gap-6"> 
            <h1 className=" font-bold">{index+1}.{item.taskName}</h1>
           <h2>Status: {item.status?"Complete":"pending"}</h2></div>
          <div className="flex flex-col text-white pt-3 gap-3" >
            <button onClick={()=>{doneTask(item.id)}} className="bg-blue-800 py-1 px-12 rounded-md">Update Status</button>
            <button onClick={()=>{deleteTask(item.id)}} className="bg-blue-800 py-1 px-12 rounded-md">Remove</button>
          </div>
          </div>
        )
      })}
    </div>
   </div>
  )
}
export default App
