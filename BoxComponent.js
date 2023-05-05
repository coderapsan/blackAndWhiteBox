import React from "react";
import Boxes from "./Boxes";
import  ReactDOM  from "react-dom";

export default function BoxCommponent(props){
    const [on, setOn]= React.useState(props.on)

    const styles={
        backgroundColor:
       on ? "black" : "transparent"
       
    }
    function toggle(){
        setOn(prevOn => !prevOn)
    }
   
    return(
        
        <div className="box" style ={styles} ><h3 className="box-text" onClick={toggle} >
                            This is box {props.id}</h3> </div>

     
    )
}