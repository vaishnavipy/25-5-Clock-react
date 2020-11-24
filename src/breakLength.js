import React from "react"

function BreakLength(props){

    function handleIncreaseBreak(){
        if(!props.play){
        props.handleBreakIncrease();
        }
      
    }

    function handleDecreaseBreak(){
        if(!props.play){
        props.handleBreakDecrease();
        }
     
    }
    return(
    <div className="break-length">
            <h3>Break Length</h3>
            <h3>
                <span className="arrow" onClick={handleIncreaseBreak}><i class="ri-arrow-up-line"></i></span>
                {props.breakLength}
                <span className="arrow" onClick={handleDecreaseBreak}><i class="ri-arrow-down-line"></i></span>
            </h3>
    </div>)


}

export default BreakLength;