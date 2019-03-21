import React, { Component } from 'react';
import logo from './test.jpg';
import './App.css';
import Kompot from "./Komponent/Kompot";
import Cyborg from "./NewMyCase/NewCase";


class App extends Component {

  state = {
    Cyborgs : [
      {model: "Optimus", number: 1313},
      {model: "Galvatron", number: 1334},
      {model: "Ronimus", number: 1387}
    ],
    pageTitle: "All Cyborgs:"
  }

  changeContent = (newTitle) => {
    console.log("Okey!");

    // const oldTitle = this.state.pageTitle;
    // const newTitle = oldTitle + "+1";

    this.setState({
      pageTitle : newTitle
    })
  }

  changeImput = (event) => {
    console.log("Good job", event.target.value);
    this.setState ({
      pageTitle : event.target.value
    })
  }


  render() {
    // const Cyborgs = this.state.Cyborgs;

    return (
      <div className="App">
        <header className="App-header">
          
          {/* <input type= "password" className = "Password-test"></input> */}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Kompot />
          <h1>{this.state.pageTitle}</h1>

          <input type="text" className="inputNew" onChange={this.changeImput}/>

          <div className="flex">
            <button className="btn" onClick={this.changeContent.bind(this, "You are button, fuck!")}>
              Click Clack
            </button> 
            <button className="btn btn-round" onClick={this.changeContent.bind(this, "All Cyborgs:")}>
              Return
            </button> 
          </div>

          {this.state.Cyborgs.map((cyborg, i) => {
            return (
              <Cyborg
                 key = {i}
                 model = {cyborg.model}
                 number = {cyborg.number}
                 onChangeText= {() => {this.changeContent(cyborg.model)}}
              />
            ) 
          })}
          
         
          {/* <Cyborg 
            model={Cyborgs[0].model} 
            number={Cyborgs[0].number}
            onChangeText={this.changeContent.bind(this, Cyborgs[0].model)}
          /> <br/>

          <Cyborg 
            model={Cyborgs[1].model} 
            number={Cyborgs[1].number}
            onChangeText= {() => this.changeContent(Cyborgs[1].model)}
          /> <br/>

          <Cyborg 
            model={Cyborgs[2].model} 
            number={Cyborgs[2].number}
            onChangeText= {() => this.changeContent(Cyborgs[2].model)}
          /> <br/>
    */}
          
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Рандомный болгарин созданный для теста :-)
          </a>
        </header>
        
      </div>
    );
  }
}

export default App;
