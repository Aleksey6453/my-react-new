import React, { Component } from 'react';
import './App.css';
import TodoComponent from "./TestComponent"





class App extends Component {

  state={
    todos: [],
    curent_todo: ""
  }

  changeInput = (event) => {
    this.setState({
      curent_todo: event.target.value
    })
  }

  putTodo = () => {
    let z = this.state.todos.slice();
    z.push(this.state.curent_todo);
    this.setState({
      todos: z,
      curent_todo: ""
    })
  }

 
 render() {
    return (
      
      <div className="App">
        <div className="formNew">
          <div>
            <div className="flexRow">
                <input type="text" placeholder="enter todo..." onChange={this.changeInput} value={this.state.curent_todo} className="inputNewClass"/>
                <button className="btnNew" onClick={this.putTodo}>Add todo</button>
            </div> 
          </div>
          <br />
          {/* { this.state.todos.length === 0 ? <h1>No todos!</h1> : <h1>You have todos!</h1> } */}
               
           
        </div>
         
        
      </div>
    );
  }
 


}





export default App;
