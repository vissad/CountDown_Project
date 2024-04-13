import { useRef } from "react";
import { useState } from "react";


export default function Player() {
const playerName = useRef();
const[enteredPlayerName, setPlayerName] = useState();

function HandleClick(){  
  setPlayerName(playerName.current.value);
}

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={HandleClick} >Set Name</button>        
      </p>
    </section>
  );
}
