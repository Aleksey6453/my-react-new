import React, { Component } from 'react';
// import logo from './test.jpg';
import './App.css';
import Kompot from "./Komponent/Kompot";
// import Cyborg from "./NewMyCase/NewCase";
import CyborgNew from "./Komponent/CyborgNew/CyborgNew"



class App extends Component {

  state = {
    Cyborgs : [
      {model: "Optimus", number: 1313, version: "cyborg"},
      {model: "mister Robot", number: 1342, version: "human"},
      {model: "Galvatron", number: 1334, version: "cyborg"},
      {model: "Ronimus", number: 1387, version: "cyborg"}
    ],
    pageTitle: "All Cyborgs:",
    showCyborgs: false
  }

  // changeHandle = (newTitle) => {
  //   this.setState({
  //     pageTitle : newTitle
  //   })
  // }


  showCyborgsButton = (event) => {
    this.setState({
      showCyborgs : !this.state.showCyborgs
    })
 }

  deleteHandler = (i) => {
    console.log("Del")
    // this.setState({pageTitle:"DElEtEd"}) 
    const cyborgs = this.state.cyborgs.concat()
    cyborgs.splice(i, 1)

    this.setState({cyborgs})
  }

    handleClick = () => {
    console.log("button input works!")
    
  }

  // changeImput = (event) => {
  //   console.log("Good job", event.target.value);
  //   this.setState ({
  //     pageTitle : event.target.value
  //   })
  //  }

 

  onChangeModel = (model, i) => {
    const cyborg = this.state.cyborgs[i]
    cyborg.model = model
    const cyborgs = [...this.state.cyborgs]
    cyborgs[i] = cyborg 
    this.setState({cyborgs})
 }

  

  render() {

    
    // const {
    //   state: {pageTitle},
    //   props: {},
    //   showCyborgsButton,
    // } = this;

    // const Cyborgs = this.state.Cyborgs;

    let cyborgs = null

    if (this.state.showCyborgs){
      cyborgs = this.state.Cyborgs.map((cyborg, i) => {
        return (
          <CyborgNew
            key = {i}
            model = {cyborg.model}
            number = {cyborg.number}
            version = {cyborg.version}
            onChangeModel = { event => {this.onChangeModel(event.target.value, i)}}
          />
        ) 
      })
    }


    return (
      <div className="App">
        <div className="App-header">
     
          <Kompot />
          <h1>{this.state.pageTitle}</h1>

          {/* <input type="text" className="inputNew" onChange={this.changeImput}/> */}

          {/* <div className="flex">
            <button className="btnNew" onClick={this.changeHandle.bind(this, "You are button, fuck!")}>
              Click Clack
            </button> 
            <button className="btnNew btnRound" onClick={this.changeHandle.bind(this, "All Cyborgs:")}>
              Return
            </button> 
          </div> */}

          <button className="btnNew" onClick={this.showCyborgsButton}>
            Show cyborgs (on/off)
          </button>
  

          { cyborgs }
  
        </div>
        
      </div>
    );
  }
}

export default App;
