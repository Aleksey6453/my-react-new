import React from "react"

export default class TestForm extends React.Component {
    state = {
      text: ""
    };
    
    render() {
        return <input className="inputNewClass" placeholder="add text..."/>
    }
}