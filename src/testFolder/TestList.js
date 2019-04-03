import React from "react"
import TestForm from "./TestForm";

export default class TestList extends React.Component {
    state = {
        todos: []
    }

    addTodo = (todo) => {
      this.setState({
          todos: [todo, ...this.state.todos]
      })
    }

    render() {
        return (
            <div>
                <TestForm onSubmit={this.addTodo} />
            </div>
        )
    }
}
