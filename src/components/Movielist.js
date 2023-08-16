import React from 'react'
import Moviecard from './Moviecard'

function Movielist({data}) {
    console.log(data) 
  return (
    <div style={{display: "block", gap:"5rem", backgroundColor: "black"}}>
      { data.map(movie => <Moviecard  movie={movie}/>)}
    </div>
  )
}

export default Movielist