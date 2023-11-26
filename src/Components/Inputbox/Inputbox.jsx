import React, { useState } from 'react'
import './Inputbox.css'
import Listtask from '../Listtask/Listtask'

function Todo() {
  const [task, Settask] = useState([
    { name: "Usaid" },
  ])

  const [Inputvalue,SetInputvalue]=useState('')
  
  const Changehandle=()=>{
    console.log(Inputvalue)
  }
  return (
    <div>
      <div className="input-box">
        <input type="text" placeholder='Add item..' onChange={((event)=>SetInputvalue(event.target.value))} />
        <i className='fas fa-plus' onClick={Changehandle}></i>
      </div>
      <Listtask task={task} />
    </div>
  )
}

export default Todo;