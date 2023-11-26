import React from 'react'
import './Listtask.css'

function Listtask({ Array }) {
    return (
        <>
            {Array.map((e) => ((
                <div className="input-box">
                <div className="titles">
                  <h5>{e.title}</h5>
                  <i className="fas fa-times"></i>
                </div>
                
              </div>
            )))}
        </>
    )
}

export default Listtask
