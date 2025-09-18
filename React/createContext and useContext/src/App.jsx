import React, { useState, createContext }  from 'react'
import One from './One'
import { counterContext } from './contexts/context'

function App() {
    
    const [count, setCount] = useState(0)
    return (
        <>
        <counterContext.Provider value={{count,setCount}}>
            <button onClick={()=>setCount(count+1)}>Count - {count}</button>    
            <One/>
        </counterContext.Provider>
        </>
    )
}

export default App
