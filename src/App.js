import React, { Component } from 'react';
import './App.css';
import TodoComponent from "./TestComponent"





class App extends Component {

  state={
    todos: [],
    curent_todo: "",
    title: "TodoListReact",
    count: 0
  }

  countClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  delTitle = () => {
    this.setState({
      title: " "
    })
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

           <h1 className="titleMy">{this.state.title}</h1>

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
         
         <button className="btnNew" onClick={this.delTitle}>Test</button>   
        <button onClick={this.countClick} className="btnNew">{this.state.count}</button>   
        </div>
        
         
        
      </div>
    );
  }
 


}





export default App;
