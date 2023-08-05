import React, { useState } from 'react'
import Swal from 'sweetalert2'

export const AddTodoItem = (props) => { 

    const [title,setTitle] = useState("")
    const [desc,setDesc] = useState("")

    const submit = (e)=>{
        e.preventDefault();

        if(!title || !desc){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Title Or Discreption Is Missing',
                footer: '<a href="">Why do I have this issue?</a>'
              })
        }
        else{
            
            props.addTodo(title,desc);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'To Do Task Added',
                showConfirmButton: false,
                timer: 1500
              })
              setTitle("");
              setDesc("");
        }
    }
    return (
        <>
            <form className='container' onSubmit={submit}>
            <div className='text-center'>Add To Do Task</div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" />
                </div>
            
                <button type="submit"  className="btn btn-success">Add Task</button>
            </form>
            
        </>


    )
}
