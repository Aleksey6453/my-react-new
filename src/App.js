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

  let x = this.state.todos.map((event, index) => {
    return (
      <li key={index}>
         <h1>   
            {event} 
        </h1> 
      </li>
    )
  } )
    return (
      
      <div className="App">
        <div className="formNew">
          <div>
            <div className="flexRow">
                <input type="text" placeholder="enter todo..." onChange={this.changeInput} value={this.state.curent_todo} className="inputNewClass"/>
                <button className="btnNew" onClick={this.putTodo}>Add todo</button>
            </div> 
          </div>
          
      {this.state.todos.length === 0 ? <h1>No todos!</h1> : <ul className="listStyleTypeNone">{x}</ul> } 
         
            
           
        </div>
        
         
        
      </div>
    );
  }
 


}





export default App;
