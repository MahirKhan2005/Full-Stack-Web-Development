import React, { useState, useEffect } from 'react'
import Die from './components/Die'
import './App.css'
import Confetti from "react-confetti"
import { v4 as uuidv4 } from 'uuid';

function App(){
  function generateNewDie(){
    return (
      {
        id: uuidv4(),
        isHeld: false,
        num: Math.floor(Math.random()*6 + 1)
      }
    )
  }
  
  function allNewDies(){
    const newDies = []
    for (let i = 0; i < 10; i++) {
      const element = generateNewDie();
      newDies.push(element)
    }
    return newDies
  }


  const [dies, setDies] = useState(allNewDies())
  const [tenzies, setTenzies] = useState(false)

  function rollDies(){
    setDies(oldDice=>oldDice.map(die=>die.isHeld?die:{...die, num: Math.floor(Math.random()*6 + 1)}))

  }

  function holdDice(id){
    setDies(oldDice=>
      oldDice.map(die=>
        die.id===id?{...die ,isHeld : !die.isHeld} : die
      )
    )
  }

  useEffect(() => {
    const allHeld = dies.every(die=>die.isHeld)
    const first = dies[0].num
    const allSame = dies.every(die=>die.num===first)
    if (allHeld && allSame) setTenzies(true)
    else setTenzies(false);
  }, [dies])
  


  return (
      <>
      {tenzies && <Confetti />}
    <div className="flex flex-col mt-20 justify-center items-center gap-4">

      <h1 className='text-center text-6xl mb-7'>Tenzies</h1>
      <h1 className='text-2xl w-150'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</h1>
      <div className="flex flex-wrap w-150">
        {dies.map(die=>(
          <Die key={die.id} number={die.num} isHeld={die.isHeld} hold={()=>{holdDice(die.id)}} />
        ))}
      </div>
    <button onClick={rollDies} className='text-4xl bg-blue-700 text-white px-4 py-2 rounded-xl mb-12 cursor-pointer hover:bg-blue-500 active:scale-90 transition'>{tenzies?<div onClick={()=>{setDies(allNewDies())}}>New Game</div>:"Roll"}</button>
    </div>
    </>
  )
}

export default App
