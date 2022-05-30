import React from 'react'
import {useState,createContext} from 'react'
export const MovieContext = createContext()

export const MovieProvider = props=>{
    const [movies, setMovies] = useState([
        {
            name:"The Shawshank Redemption",
            year:"1994",
            id:"1"
        },
        {
            name:"The Godfather",
            year:"1972",
            id:"2"
        },
        {
            name:"The Godfather: Part II",
            year:"1974",
            id:"3"
        },
    ])
    return(
        <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}

