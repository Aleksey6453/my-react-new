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
                {this.state.todos.map((todo, i) => <div key={i} className="margBot">{todo.text}</div>)}
            </div>
        )
    }
}
