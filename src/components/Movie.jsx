import React from 'react'

function Movie(props) {
    console.log(props)
  return (
    <div>{props.name} 
    
    { props.year}</div>
  )
}

export default Movie