import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [count,setCount] = useState(0)
  const [color,setColor] = useState('#242424')
  useEffect(()=>{
    document.body.style.backgroundColor = color
  },[color])
  const ref = useRef(0)
  function increment(){
    ref.current++;
    console.log("Clicked - ", ref.current)
  }
  return (
    <>
    <button onClick={increment}>Ref</button>
    <button onClick={()=>{setCount(count+1)}}>Count is {count}</button>
    <button onClick={()=>{setColor('#242424')}}> Set color to default</button>
    <button onClick={()=>{setColor('red')}}> Set color to red</button>
    <button onClick={()=>{setColor('blue')}}> Set color to blue</button>
    <button onClick={()=>{setColor('green')}}> Set color to green</button>

    </>
  )
}

export default App
