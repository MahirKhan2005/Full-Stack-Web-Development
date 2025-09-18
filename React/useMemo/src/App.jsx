import './App.css'
import { useState, useMemo } from "react";

const nums = new Array(30_000_000).fill(0).map((_,i)=>{
  return {
    index: i,
    isMagical: i===29_000_000
  }
})
function App() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState(nums)

  const magical = useMemo(()=>{return numbers.find(item=>item.isMagical===true)},[])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Hello React 👋</h1>

      <p className="text-2xl mb-4">Count: {count}</p>
      <p className="text-2xl mb-4">Magical Number: {magical.index}</p>

      <div className="flex gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
