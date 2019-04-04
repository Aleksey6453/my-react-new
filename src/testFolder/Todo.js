import React from "react"

export default props => 
    (
        <div 
            style={{
                textDecoration: props.todo.complete ? "line-through" : ""
            }} 
            className="margBot" 
            onClick={props.toggleComplete}
        >
            {props.todo.text}
        </div>
    );
   


