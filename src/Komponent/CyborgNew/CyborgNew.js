import React from "react"



const Cyborg = (props) => {

    const inputClasses = ["inputBord"]

    if (props.model !== " "){
        inputClasses.push("green")
        console.log(13)
    } else {
      inputClasses.push("red")
      console.log(23)
    }

    return (
        <div className="margBot">
            <a>Cyborg model: {props.model}</a> <br/>
            <a>Number: { props.number } </a> <br/>
            <a>Cyborg version: { props.version } </a> <br/>
            <input 
                type="text" 
                onChange= {props.onChangeModel} 
                value={props.model}
                className={inputClasses.join(" ")}
               
            />
            <button className="btnNew btnRound" onClick={ props.onDelete}>Del</button>
        </div> 
      
    )
   
}

export default Cyborg