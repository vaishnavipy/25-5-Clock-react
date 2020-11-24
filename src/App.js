
import './App.css';
import SessionLength from "./sessionLength"
import React,{useState} from "react"
import Clock from "./clock"
import BreakLength from "./breakLength"

function App() {
  const [session,setSession] = useState(25);

  const [breakLength,setBreakLength] = useState(5);

  const [arrowClicked,setArrowClicked] = useState(false);

  const [play,setPlay] = useState(false);

  function handleSessionIncrease(){
    setSession(prevSession => prevSession + 1)
    setArrowClicked(true);
  }

  function handleSessionDecrease(){
    if(session > 1){
    setSession(prevSession => prevSession - 1) 
    setArrowClicked(true);
    }
  }
  function handleBreakIncrease(){
    setBreakLength(prevState => prevState + 1)
  }

  function handleBreakDecrease(){
    if(breakLength > 1){
      setBreakLength(prevState => prevState -1)
    }
  }

  function handlePlay(){
    setArrowClicked(false)
    setPlay(prevState => !prevState);
  }

  function handleReset(){
    setSession(25);
    
  }

  return (
    <div className="main-container">
      <h1>25 + 5 Clock</h1>

      <BreakLength 
      breakLength={breakLength} 
      play={play}
      handleBreakIncrease={handleBreakIncrease}
      handleBreakDecrease={handleBreakDecrease}
      />

      <SessionLength 
      session={session} 
      
      handleSessionDecrease={handleSessionDecrease} 
      handleSessionIncrease={handleSessionIncrease} 
      play={play}/>

      <Clock 
      session={session} 
      arrowClicked={arrowClicked} 
      handlePlay={handlePlay}
       handleReset={handleReset}
        breakLength={breakLength} />
        
    </div>
  );
}

export default App;
