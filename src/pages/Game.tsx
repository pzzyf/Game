import { useState } from 'react'

function Square({ value, onSquareClick }) {
  return <button className="square" onClick={() => onSquareClick()}>{value}</button>
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClk(i: number) {
    if (squares[i] || calculateWinner(squares)) {
      return
    }

    const temp = squares.slice()
    temp[i] = xIsNext ? 'X' : 'O'
    onPlay(temp)
  }

  const winner = calculateWinner(squares)
  let status
  if (winner) {
    status = `Winner: ${winner}`
  }
  else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`
  }

  return (
    <>
      <div className="status">{status}</div>
      <div>
        <Square value={squares[0]} onSquareClick={() => handleClk(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClk(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClk(2)} />
      </div>
      <div>
        <Square value={squares[3]} onSquareClick={() => handleClk(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClk(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClk(5)} />
      </div>
      <div>
        <Square value={squares[6]} onSquareClick={() => handleClk(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClk(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClk(8)} />
      </div>
    </>
  )
}

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true)
  const [history, setHistory] = useState([Array(9).fill(null)])

  function handlePlay(nextSquares: string[]) {
    setHistory([...history, nextSquares])
    setXIsNext(!xIsNext)
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={history[history.length - 1]} onPlay={handlePlay} />
      </div>
    </div>
  )
}

function calculateWinner(squares: string[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}
