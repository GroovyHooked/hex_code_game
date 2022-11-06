import { useGame } from './use_game.js'
import "./App.css";

function App() {
  const { 
    color,
    guess1Ref,
    guess2Ref,
    guess3Ref,
    refreshPage,
    handleAnswer
  } = useGame();

  return (
    <>
    <h3>Hex Code Guess Game</h3>
    <p>Find the correct hex code that matches the displayed color</p>
    <div className="container">
      <div className="color" style={{ backgroundColor: color }}></div>
      <div className="guesses">
        <div className="guess guess1" ref={guess1Ref} onClick={(e) => handleAnswer(e)}>
        </div>
        <div className="guess guess2" ref={guess2Ref} onClick={(e) => handleAnswer(e)}>
        </div>
        <div className="guess guess3" ref={guess3Ref} onClick={(e) => handleAnswer(e)}>
        </div>
      </div>
    </div>
    <div className="replay">
      <button type="button" onClick={refreshPage} >Reload</button>
    </div>
    </>
    
  );
}

export default App;
