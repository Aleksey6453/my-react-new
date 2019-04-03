import React from "react"

const Todo = (props) => {
    return (
        <div 
            style={{
                textDecoration: "line-through"
            }} 
            className="margBot" 
            onClick={props.toggleComplete}
        >
            {props.todo.text}
        </div>
    )
   
}

export default Todo