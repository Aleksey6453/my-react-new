import React from "react"

const Todo = (props) => {
    return (
        <div className="margBot" onClick={props.toggleComplete}>
            {props.text}
        </div>
    )
   
}

export default Todo