import React from "react"

export default class TestForm extends React.Component {
    state = {
      text: ""
    };

    hendleTestForm = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    
    render() {
        return (
            <input 
            className="inputNewClass"
            name="text"
            value={this.state.text}
            onChange={this.hendleTestForm}
            placeholder="todos..."/>
        )
            
    }
}