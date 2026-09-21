import "./App.css";
import { useState } from "react";
import TheoriApp from "./theori.jsx";
import PraktikumApp from  "./praktikum.jsx";

function App(){
  const [theori, setTheori] = useState(true);
  const [praktikum, setPraktikum] = useState(false);
  
  const handleTheoriClick = () => {
    setTheori(true);
    setPraktikum(false);
  }

  const handlePraktikumClick = () => {
    setTheori(false);
    setPraktikum(true);
  }

  const buttons = (
      <div className="button-container">
        <button className={`button ${theori ? 'button-active' : ''}`} onClick={handleTheoriClick}>
          theori
        </button>
        <button className={`button ${praktikum ? 'button-active' : ''}`} onClick={handlePraktikumClick}>
          praktikum
        </button>
      </div>
  )

  if (theori) {
    return (
      <div>
        {buttons}
        <TheoriApp />
      </div>
    )
  } else if (praktikum) {
    return (
      <div>
        {buttons}
        <PraktikumApp />
      </div>
    )
  }
}

export default App;