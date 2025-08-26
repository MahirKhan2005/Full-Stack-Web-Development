import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div className='card'>
    <h1>{props.name}</h1>
    <div>{props.year}</div>
    </div>
  )
}

export default Card
