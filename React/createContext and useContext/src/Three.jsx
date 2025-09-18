import React from 'react'
import { useContext } from 'react'
import { counterContext } from './contexts/context'

function Three() {
    const {count,setCount} = useContext(counterContext)
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Context Count - {count}</button>
    </div>
  )
}

export default Three
