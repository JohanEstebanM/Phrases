import React from 'react'
import Data from '../assets/Data.json'

const phrases = ({num}) => {
    const phrase =Data[num].phrase;
  return (
    <div>
        <p>{phrase}</p>
    </div>
  )
}

export default phrases