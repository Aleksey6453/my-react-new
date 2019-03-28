import React from "react"

const ButtonNew = () => {
    return (
        <button onClick={handleClick} className="btnNew btnRound">Add</button>
    )
}

const handleClick = () => {
    console.log("button input works!")
    
}

export default ButtonNew