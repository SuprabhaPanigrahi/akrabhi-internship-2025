"use client";
import { useState } from 'react';
import Square from './Square';
import { BoardState } from '../types/game';

export default function Board() {

  const [board, setBoard] = useState<BoardState>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const calculateWinner = (squares: BoardState) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (i: number) => {
    if (board[i] || calculateWinner(board)) return;
    const newBoard = board.slice();
    newBoard[i] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const winner = calculateWinner(board);
  const status = winner 
    ? `Winner: ${winner}`
    : board.every(square => square) 
      ? 'Draw!'
      : `Next player: ${isXNext ? 'X' : 'O'}`;

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="text-3xl font-bold mb-4 text-gray-900 bg-yellow-100 px-6 py-3 rounded-lg">
        {status}
      </div>
      <div className="grid grid-cols-3 gap-2 bg-gray-900 p-2 rounded-lg">
        {board.map((square, i) => (
          <Square key={i} value={square} onClick={() => handleClick(i)} />
        ))}
      </div>
      <button
        onClick={resetGame}
        className="mt-6 px-6 py-3 bg-green-600 text-white text-xl font-bold rounded-lg hover:bg-green-700"
      >
        Reset Game
      </button>
    </div>
  );
}