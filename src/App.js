import React, { Component } from 'react';
import './App.css';
// import InputNew from "./inputFolder/InputMy";
// import ButtonNew from "./buttonFolder/ButtonMy";
import TitleNew from "./titleFolder/TitleMy"
import Cyborg from "./cyborg/Cyborg"


class App extends Component {
 
 
  state = {
    cyborgs : [
      {model: "Optimus", number: "1325", art: "a"},
      {model: "Optimus2", number: "1326", art: "h"},
      {model: "Optimus3", number: "1327", art: "z"}
    ],

    pageTitle : "React Insane",
    showCyborgs : false

  }

  changeHandle = (newTitle) => {
      this.setState({
        pageTitle: newTitle
      })
  } 

  toggleCyborgsHendler = () => {
    console.log("TTTOOOGGLLEEE")
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

  // handleInput = (event) => {
  //   this.setState({
  //     pageTitle : event.target.value
  //   })
   
  // }

  handleClick = () => {
    console.log("button input works!")
    
  }

  onChangeName = (model, i) => {
     const cyborg = this.state.cyborgs[i]
     cyborg.model = model
     const cyborgs = [...this.state.cyborgs]
     cyborgs[i] = cyborg 
     this.setState({cyborgs})
  }

  render() {

    let cyborgs = null
    if(this.state.showCyborgs){
      cyborgs =  this.state.cyborgs.map((cyborg, i) => {
        return (
          <Cyborg 
             key = {i}
             model= {cyborg.model}
             number = {cyborg.number}
             art = {cyborg.art}
             onDelete = {this.deleteHandler.bind(this,i)}
             onChangeName = {(event) => { this.onChangeName( event.target.value, i)}}
          />
        )
      })
    }

   return (

      
      <div className="App">
        <div className="formNew">
            <form action="#" >
               
              <TitleNew />
              <p>{this.state.pageTitle}</p> 
              <button className="btnNew" onClick={this.toggleCyborgsHendler}>Togle</button>

              <div className="flexRow margBot">
                  {/* <InputNew /> */}
                  {/* <input type="text"  onChange={this.handleInput} className="inputNewClass" name="text" placeholder="add text please..."/> */}
                  {/* <ButtonNew /> */}
                  {/* <button className="btnNew btnRound" onClick={this.changeHandle.bind(this, "Check")}>Add</button> */}
              </div>

              { cyborgs }
              

            </form>
        </div>
         
        
      </div>
    );
  }
 


}





export default App;
