
import { useState } from "react"
import{v4 as uuidv4 }from "uuid"
import Flatlist from "./Components/Flatlist"


const App =()=>{

  const [todoList, setTodoList] =useState([])
  const[todo , setTodo] =useState("")
  const[editable,setEditable]=useState(null)

  const handleTodoList = ()=>{
    if (todo == "") return alert ("Field Required")
    if(todoList.some(element => element.task == todo)){
      return alert("Task already exist")
    }

    const taskObj ={
      id:uuidv4(),
      task:todo,
      time: new Date().toLocaleTimeString("en-IN")
    }

    setTodoList([taskObj,...todoList])
    setTodo("")
  }

    const removeItem =(id)=>{
        const res =todoList.filter(element => element.id != id)
        setTodoList(res)

      }
    
    const handleEdit=(item)=>{
      setEditable(item)
    }

    const handleUpdate =(id,text)=>{
      const res =todoList.map(item=>{
        if(item.id==id){
          return{...item,task:text}
        }
        return item
      })
      setTodoList(res)
      setEditable("")
    }


    



  


  

  return (
    <div className="w-screen px-3 flex items-center flex-col font-mono">
      <div className="w-full md:w-[400px] mt-10"> 
        <div className="flex flex-col gap-3">
          <input type="text" placeholder="Enter Task" value={todo} onChange={(event)=>{setTodo(event.target.value)}} className="p-2  border-2 outline-none rounded bg-gray-400 text-black " />
          <button onClick={handleTodoList} className="bg-blue-400 p-2 rounded-xl">Add Task</button>
        </div>
      </div>
      <Flatlist
      todoList={todoList}
      removeItem={removeItem}
      handleEdit={handleEdit}
      editable={editable}
      handleUpdate={handleUpdate}

      />
    </div>
  )

}
export default App
