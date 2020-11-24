import React, { useState } from "react";
import "./App.css"

function SessionLength(props){

    function handleIncreaseSession(){
        if(!props.play){
        props.handleSessionIncrease();
        }
      
    }

    function handleDecreaseSession(){
        if(!props.play){
        props.handleSessionDecrease();
        }
     
    }


    return(
        <div className="session-length">
                <h3>Session Length</h3>
                <h3>
                    <span className="arrow" onClick={handleIncreaseSession}><i class="ri-arrow-up-line"></i></span>
                    {props.session}
                    <span className="arrow" onClick={handleDecreaseSession}><i class="ri-arrow-down-line"></i></span>
                </h3>
    </div>)

}

export default SessionLength;