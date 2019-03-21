import React from 'react'
  


export default (props) => {
  return (
      <React.Fragment> 
           
            <a>Cyborg model: {props.model}</a>
            <a>Number : <b>{props.number}</b> </a>
            <button className="btn" onClick={props.onChangeText}>Touch me</button>
            {/* <a className="child">{ props.children }</a> */}
            <a style={{color:"magenta"}}>{ props.children }</a>
      </React.Fragment>
  )
} 