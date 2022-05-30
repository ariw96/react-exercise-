import React from 'react'
import {useState,useContext} from 'react'
import {MovieContext} from './MovieContext'
import Movie from './Movie'
const Movielist=() =>{
   const [movies,setMovies] = useContext(MovieContext)

  return (
      <>
      {/* <h1>{value}</h1> */}
    {movies.map(movie => (
        <Movie name ={movie.name} year={movie.year} key ={movie.id}/>
        ))}
        </>

  )
}

export default Movielist