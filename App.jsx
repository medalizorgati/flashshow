import { useState } from "react";
export default function App() {
  const[newitem,setnewitm] =useState("")
  const[todos,settodos] =useState([])


  
  function handsubmit(e){
    e.preventDefault()
    settodos([...todos,
      {id: crypto.randomUUID(),title:newitem,completed:false} 
    ]
      
    )

  }
  console.log(todos)
  return (
    <div>
      <form className="formname">
        <div className="form-row">
          <label htmlFor="item">new item</label>
          <input value={newitem} onChange={e => setnewitm(e.target.value)} type="text" id="item" />
        </div>
        <div>
          <button className="btn" type="submit">add</button>
        </div>
      </form>
      <h1 className="header">todo list</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            item
          </label>
          <button className="btn btn-danger">delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            item2
          </label>
          <button className="btn btn-danger">delete</button>
        </li>
      </ul>
    </div>
  );
}