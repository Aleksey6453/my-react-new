import React, { Component } from 'react';
import './App.css';
import TodoComponent from "./TestComponent"





class App extends Component {

  state={
    todos: [],
    curent_todo: ""
  }

  delTodo = (index) => {
    let d =  this.state.todos.slice();
    d.splice(index, 1);
    this.setState({
      todos: d,
      curent_todo: ""
    });
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
      <li key={index} className="flexRow">
         <h1>   
            {event} 
        </h1> 
        <button className="btnNew btnRound" onClick={this.delTodo}>
          Del
        </button>
      </li>
    )
  } )
    return (
      
      <div className="App">
        <div className="formNew">

            <TodoComponent />
         
            <div className="flexRow">
                <input 
                  type="text"
                  placeholder="enter todo..." 
                  onChange={this.changeInput} 
                  value={this.state.curent_todo} 
                  className="inputNewClass"
                />
                <button 
                  className="btnNew" 
                  onClick={this.putTodo}>
                    Add todo
                </button>
            </div> 
         
          
      {this.state.todos.length === 0 ? " " : 
      <ul className="listStyleTypeNone">{x}</ul> } 
         
            
           
        </div>
        
         
        
      </div>
    );
  }
 


}





export default App;
