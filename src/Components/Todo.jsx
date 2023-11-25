import React from 'react'
import './Todo.css'
function Todo() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    {/* ----Heading --- */}
                    <div className="outer-box">
                        <h1 className="heading">Todo List</h1>
                        <h3 className="paragraph">Whoop, it's Wednesday</h3>
                    </div>
                    {/* ---------Input Box -------- */}
                    <div className="input-box">
                        <input type="text" placeholder='Add item..' />
                        <button>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Todo;