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
            <a>Cyborg number: { props.number } </a> <br/>
            <a>Cyborg art: { props.art } </a> <br/>
            <input 
                type="text" 
                onChange= {props.onChangeName} 
                value={props.model}
                className={inputClasses.join(" ")}
            />
            <button className="btnNew" onClick={ props.onDelete}>Del</button>
        </div> 
      
    )
   
}

export default Cyborg