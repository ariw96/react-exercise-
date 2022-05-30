import React,{useState,useContext} from 'react'
import { MovieContext } from './MovieContext'

function AddMovie() {
    const [name,setName]=useState('')
    const [year,setYear]=useState('')
    const [movies,setMovies]=useContext(MovieContext)
    const updateName=(e)=>{
        setName(e.target.value)
    }
    const updateYear=(e)=>{
        setYear(e.target.value)
    }
    const submit=(e)=>{
        e.preventDefault()
      setMovies([...movies,{name:name,year:year}])
    }
  return (
      <form>
    <div>AddMovie</div>
<input type="text" name="name"  onChange={updateName}/>
<input type="text" name="year"  onChange={updateYear}/>
<button type="submit" onClick={submit}>Add Movie</button>
      </form>
  )
}

export default AddMovie