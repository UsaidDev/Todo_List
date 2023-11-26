import React, { useState } from 'react'
import './Header.css'
import Listtask from '../Listtask/Listtask';
function Header() {
  const [Array,SetArray]=useState([
    {title:"Usaid OK"},
    {title:"Usaid OK"},
    {title:"Usaid OK"},
    {title:"Thak you"},{title:"Usaid OK"},
  ])
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="outer-box">
            <h1 className="heading">Todo List</h1>
            <h3 className="paragraph">Whoop, it's Wednesday</h3>
          </div>
          <div className="input-box">
            <input type="text" placeholder='Add item...' />
            <i className='fas fa-plus'></i>
          </div>
          <Listtask Array={Array} />
        </div>
      </div>
    </div>
  )
}

export default Header;