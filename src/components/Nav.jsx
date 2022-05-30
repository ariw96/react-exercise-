import React,{useContext} from 'react'
import {MovieContext} from './MovieContext'
function Nav(props) {
   const [movies,setMovies] = useContext(MovieContext)
  return (
    <div>
        <h2> ari</h2>
        < > list of movies {movies.length}</>
    </div>
  )
}

export default Nav