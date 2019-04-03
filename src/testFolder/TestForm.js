import React from "react"

export default class TestForm extends React.Component {
    state = {
      text: ""
    };

    handleTestForm = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    testSubmit = (event) => {
       event.preventDefault();
       this.props.onSubmit({
          
           text: this.state.text,
           complete: false
       });
       this.setState({
           text: ""
       })
    }
    render() {
        return (
            <form onSubmit={this.testSubmit}>
                <input 
                className="inputNewClass"
                name="text"
                value={this.state.text}
                onChange={this.handleTestForm}
                placeholder="todos..."
                />
                <button className="btnNew" onClick={this.testSubmit}>Add todo</button>
            </form>
            
        )
            
    }
}