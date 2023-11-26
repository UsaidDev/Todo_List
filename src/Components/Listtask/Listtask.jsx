import React from 'react'
import './Listtask.css'

function Listtask({task}) {
    return (
        <div>
            {task.map((item) => (
                <div className="input-box">
                    <input type="text" placeholder='Add item..' />
                    <i className='fas fa-times'></i>
                </div>
            ))}
        </div>
    )
}

export default Listtask
