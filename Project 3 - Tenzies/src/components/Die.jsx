import React from 'react'

function Die({isHeld, hold, number}) {
  return (
    <>
      <button 
      className={`w-20 h-20 m-4 rounded-xl flex justify-center items-center text-4xl cursor-pointer active:scale-90 transition drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] ${isHeld? "bg-green-600" : "bg-white"}`}
      onClick={hold}
      >
        {number}
      </button>
    </>
  )
}

export default Die
