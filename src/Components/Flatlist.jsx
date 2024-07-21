/* eslint-disable react/prop-types */
import React, { Fragment, useState } from 'react'


const Flatlist=({ todoList, removeItem, handleEdit, editable, handleUpdate})=>{
   
    const[editText,setEditText]= useState(editable?.task? editable?.task: "")
    return(
        <div className="mt-10 flex flex-row flex-wrap justify-center gap-3 text-white">
            {
                
                todoList.map(item=>{
                    return (
                        <div key={ item.id} className="p-3 border-2 border-gray-500 rounded-xl">
                            <p>Task : 
                                {
                    
                                editable?.id==item.id?
                                <Fragment>
                                    <input type="text" className="outline-none" placeholder="enter text" value={editText} onChange={setEditText}/>
                                    <button onClick={()=>{
                                        handleUpdate(item.id,editText)
                                        setEditText("")
                                    }
                                    }>Update</button>
                                </Fragment>
                                :item.task

                                }</p>
                            <p>Time: {item.time}</p>
                            <div className="flex justify-end mt-4 gap-4"  >
                                <i className="fa fa-pen text-blue-500 cursor-pointer" onClick={()=>handleEdit(item)}></i>
                                <i className="fa fa-trash text-red-600 cursor-pointer" onClick={()=>removeItem(item.id)}></i>
                            </div>
                        </div>
                    )
                })

            }
        </div>
    )
    
}
export default Flatlist


