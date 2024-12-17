import logo from './logo.svg';
import './App.css';
import React from 'react';
import { handOptions } from './gameData/handOptions.ts';
import { useState } from 'react';

function App() {
  const [matchUp, setMatchUp] = useState({bot: '', player: ''})
  const [winner, setWinner] = useState()
  const [score, setScore] = useState({player: 0, bot: 0})

  const getBotHand = () => handOptions[Math.floor(Math.random() * handOptions.length)]

  const throwHands = (_ev) => {
    const botHand = getBotHand();
    const playerHand = _ev.target.value

    setMatchUp({bot: botHand.value, player: playerHand})

    if (botHand.value === playerHand) {
      setWinner('Draw')
    } else if (botHand.beats.includes(playerHand)) {
      setWinner('Bot')
      setScore({...score, bot: score.bot + 1})
    } else {
      setWinner('Player')
      setScore({...score, player: score.player + 1})
    }
  }



console.log('SCORE: ', score)


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Rock Paper Scissors
        </p>
        <p>PLAYER: {score.player}</p>
        <p>BOT: {score.bot} </p>
        <p>Bot throws: {matchUp.bot} || Player throws: {matchUp.player}</p>
        <p>Game Winner: {winner}!</p>
        {handOptions.map((option) =>
          <button onClick={throwHands} value={option.value}>{option.value}</button>
        )}
      </header>
    </div>
  );
}

export default App;
