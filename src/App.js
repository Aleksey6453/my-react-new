import React, { Component } from 'react';
import logo from './test.jpg';
import './App.css';
import Kompot from "./Komponent/Kompot";
import Cyborg from "./NewMyCase/NewCase";



class App extends Component {

  state = {
    Cyborgs : [
      {model: "Optimus", number: 1313, version: "cyborg"},
      {model: "Galvatron", number: 1334, version: "cyborg"},
      {model: "Ronimus", number: 1387, version: "cyborg"},
      {model: "mister Robot", number: 1342, version: "human"}
    ],
    pageTitle: "All Cyborgs:",
    showCyborgs: false
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

  showCyborgsButton = (event) => {
     console.log("Work show!")
     this.setState({
       showCyborgs : !this.state.showCyborgs
     })
  }

  onChangeModel = (model, i) => {
     console.log(123)
  }

  

  render() {
    // const {
    //   state: {pageTitle},
    //   props: {},
    //   showCyborgsButton,
    // } = this;

    // const Cyborgs = this.state.Cyborgs;

    return (
      <div className="App">
        <header className="App-header">
          
          {/* <input type= "password" className = "Password-test"></input> */}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Kompot />
          <h1>{this.state.pageTitle}</h1>

          {/* <input type="text" className="inputNew" onChange={this.changeImput}/> */}

          <div className="flex">
            <button className="btn" onClick={this.changeContent.bind(this, "You are button, fuck!")}>
              Click Clack
            </button> 
            <button className="btn btn-round" onClick={this.changeContent.bind(this, "All Cyborgs:")}>
              Return
            </button> 
          </div>

          <button className="btn" onClick={this.showCyborgsButton}>
            Show cyborgs (on/off)
          </button>

          { 
            this.state.showCyborgs
              ?  this.state.Cyborgs.map((cyborg, i) => {
                  return (
                    <Cyborg
                      key = {i}
                      model = {cyborg.model}
                      number = {cyborg.number}
                      version = {cyborg.version}
                      onChangeModel = { event => {this.onChangeModel(event.target.value, i)}}
                    />
                  ) 
                }) :
                  null
          }
  
        </header>
        
      </div>
    );
  }
}

export default App;
