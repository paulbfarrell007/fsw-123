import Dice from "./Die.js";
import {useState} from "react"
function RollDice(props) { 
 const [dice1, setDice1] = useState (Math.floor(Math.random()*6))
 const [dice2, setDice2] = useState (Math.floor(Math.random()*6))
    return (
      <div className="RollDice">
< Dice
      num={dice1}        
    />
< Dice
      num={dice2}        
    /> 

      </div>
    
    );
  }
  
  export default RollDice;