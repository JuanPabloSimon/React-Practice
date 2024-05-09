import { useState } from "react";
import "./App.css";
import confetti from "canvas-confetti";
import { TURNS } from "./assets/constants";
import Square from "./components/Square";
import { checkWinnerFrom, checkEndBoard } from "./logic/board";
import WinnerModal from "./components/WinnerModal";
import Board from "./components/Board";

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ?? TURNS.X;
  });
  const [winner, setWinner] = useState(null); //null (no hay ganador), false (empate?)

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    window.localStorage.removeItem("board");
    window.localStorage.removeItem("turn");
  };
  const updateBoard = (index) => {
    // no actualizar esta posición
    if (board[index] || winner) return;

    // actualizar tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    // cambiar turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    // Guardar Partida
    window.localStorage.setItem("board", JSON.stringify(newBoard));
    window.localStorage.setItem("turn", newTurn);
    //revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      confetti();
    } else if (checkEndBoard(newBoard)) {
      setWinner(false);
    }
  };
  return (
    <div className="board">
      <h2 style={{ marginBottom: 10 }}>Hola TicTacToe</h2>
      <button onClick={resetGame}>Reset Game</button>
      <Board board={board} updateBoard={updateBoard} />
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <section>
        <WinnerModal winner={winner} resetGame={resetGame} />
      </section>
    </div>
  );
}

export default App;
