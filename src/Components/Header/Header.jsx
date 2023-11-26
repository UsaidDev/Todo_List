import React, { useState } from 'react'
import './Header.css'
import Inputbox from '../Inputbox/Inputbox'

function Header() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="outer-box">
            <h1 className="heading">Todo List</h1>
            <h3 className="paragraph">Whoop, it's Wednesday</h3>
            <Inputbox/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;