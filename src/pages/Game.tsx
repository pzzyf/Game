import { useState } from 'react'

function Square({ value, onSquareClick }) {
  return <button className="square" onClick={() => onSquareClick()}>{value}</button>
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))

  function handleClk(i: number) {
    const temp = squares.slice()
    temp[i] = 'X'
    setSquares(temp)
  }

  return (
    <>
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
