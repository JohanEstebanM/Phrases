import React from 'react'
import Data from '../assets/data.json'

const authors = ({num}) => {
    const phrase =Data[num].author;
  return (
    <div>
        <p>{phrase}</p>
    </div>
  )
}

export default authors