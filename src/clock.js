import React, { Fragment,useEffect,useState} from "react"
import "./App.css"

function Clock(props){

    const [sec,setSec] = useState(0);

    let intervalId;

   

    const [min,setMin] = useState(props.session);
   
    const [play,setPlay] = useState(false)

  

    function handlePlay(){

       setPlay(prevState => !prevState);

        if(props.arrowClicked){
            setMin(props.session)
            setSec(0)
        }
       
        props.handlePlay();
     
       
    }

    function timer(){
       console.log(sec)
       if(sec > 0){
        setSec(prevState => Number(prevState)-1) 
       }else{
           
        setSec(59)
        setMin(prevState => prevState-1)
       }
       if(min == 0 && sec == 0){
        setMin(props.breakLength);
        setSec(0);
    }
      
    }
   

   

    useEffect(()=>{

        if(play){
            intervalId = setInterval(timer,1000)

        }
       
        return () => clearInterval(intervalId);

    },[play])
    

    function handleReset(){
       setMin(Clock.defaultProps.session);
       setSec(0);
       setPlay(false);
       props.handleReset()
        
    }
    

  

    

    return(
    <Fragment>
        <div className="clock-container">
        <h3>Session</h3>

        
        
         {props.arrowClicked ? <span className="time">{props.session}:00</span> :
         sec < 10 && min < 10 ?  
         <span className="time">{`0${min}`}:{`0${sec}`}</span> :
          min < 10 ?
       <span className="time">{`0${min}`}:{sec}</span> :
        sec < 10 ? 
         <span className="time">{min}:{`0${sec}`}</span> :
         <span className="time">{min}:{sec}</span> 
           }
     
                      
         
        </div>

        <p>
            <span className="icon" onClick={handlePlay}><i class="ri-play-circle-line"></i></span>

            <span className="icon" onClick={handleReset}><i class="ri-refresh-line"></i></span>
            
        </p>
    </Fragment>)



}
Clock.defaultProps ={session:25}

export default Clock;