import React from 'react'

// function Kompot (){
//     return (
//         <h2 className="App-link">Never mind</h2>
//     )
// }

 const Kompot = () => {
     return (
        <React.Fragment>
            <h2 className="App-link">Pull yourself together</h2>
            {/* <p>{334 * 722}</p> */}
            <a>{Math.round(Math.random() * 100)}</a>
            <a>{Math.round(Math.random() * 100)}</a>
            <a>{Math.round(Math.random() * 100)}</a> <br/>
      
        </React.Fragment>
     )
 }

// export default () => {
//         return (
//             <h2 className="App-link">Pull yourself together!</h2>,
//             <p>{334 * 722}</p>
//         )
//     }

export default Kompot