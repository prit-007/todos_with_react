import React from 'react'

function TodoItem({ item, onDelete }) {
  return (
    <>
      <div className="card m-2" style={{width: "100%"}}>
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.desc}</p>
          <button className="btn btn-danger btn-sm m-2" onClick={() => { onDelete(item); }}>Delete</button>
          <button className="btn btn-warning btn-sm m-2" onClick={() => { onDelete(item); }}>Delete</button>
        </div>
      </div>
      <h4></h4>
      <p></p>
      
    </>
  )
}

export default TodoItem