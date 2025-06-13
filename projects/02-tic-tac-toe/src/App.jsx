// js
// react
import { useState } from 'react';
// third
import confetti from 'canvas-confetti';
// own
import './App.css'
import { SquareComponent } from './components/SquareComponent';
import { WinnerModalComponent } from './components/WinnerModalComponent';
import { checkWinner } from './utils/logical';
import { TURNS } from './utils/constants';

export const App = () => {
  // tablero or board.
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board');
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null);
  });
  // turno or turn.
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn');
    return turnFromStorage ?? TURNS.X;
  });
  // winner or ganador.
  const [winner, setWinner] = useState(null) // null-> no hay ganador, false -> empate.
  // updateBoard.
  const updateBoard = (index) => {
    // if board[index] no efectuar logica.
    if (board[index] || winner) return
    // set board.
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    // set turn.
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    // guardar partida here.
    window.localStorage.setItem('board', JSON.stringify(newBoard));
    window.localStorage.setItem('turn', newTurn);
    // revisar si hay winner.
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (newWinner === false) { // check si es empate.
      setWinner(newWinner);
    }
  }
  // resetGame.
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    // localStorage.
    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turn');
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button className='btn-reset-game' onClick={resetGame}>Reset Game</button>
      <section className='game'>
        {
          board.map((value, index) => {
            return (
              <SquareComponent
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {value}
              </SquareComponent>
            )
          })
        }
      </section>
      <section className='turn'>
        <SquareComponent isSelected={turn === TURNS.X}>{TURNS.X}</SquareComponent>
        <SquareComponent isSelected={turn === TURNS.O}>{TURNS.O}</SquareComponent>
      </section>
      <WinnerModalComponent winner={winner} resetGame={resetGame} />
    </main>
  )
}