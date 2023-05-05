import React from "react";
import ReactDOM from "react-dom";
import Boxes from "./Components/Boxes";
import BoxCommponent from "./Components/BoxComponent";

export default function App(props){
   
    const [squares,setSquares]= React.useState(Boxes)
    const squareElement= squares.map(square=>{
        return( <BoxCommponent 
            {...square} />
        )
    })

    return(
        
        <main>
            <h1> Click to change the state of the boxes </h1>
                {squareElement}
        </main>
    )
}
ReactDOM.render(<App/>, document.getElementById("root"))