import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const {name} = useParams()
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Hello, {name} 👋
      </h1>
      <p className="text-lg text-gray-600">
        Welcome to your personalized page!
      </p>
    </div>
  );
}

export default User
