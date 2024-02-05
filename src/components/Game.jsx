import React, {useState} from 'react';
import Board from './Board';
import './Game.css'
import {calculateWinner} from '../helper.js'


const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xIsNext, setXIstNext] = useState(true)
  const winner = calculateWinner(board)

  const handleClick = (index) =>{
    const boardCopy = [...board]
    // Определить был ли клик по ячейке или игра закончена
    if (winner || boardCopy[index]) return
    // Определить чей ход Х Или О
    boardCopy[index] = xIsNext ? 'X' : 'O'
    // Обновить наш стейт
    setBoard(boardCopy)
    setXIstNext(!xIsNext)
  }

  const startNewGame = () =>{
    return (
      <button className='start_btn' onClick={()=>setBoard(Array(9).fill(null))}>Очистить Поле</button>
    )
  }
  return (
    <div className="wrapper">
      {startNewGame()}
      <Board squares={board} click={handleClick}/>
      <p className='game__info'>
        {winner ? 'Победитель' + winner : 'Сейчас ходит' + (xIsNext ? 'X' : 'O')}
      </p>
    </div>
  );
}

export default Game;
