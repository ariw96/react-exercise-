import React,{useState,useEffect, useRef} from 'react'

function Focus() {
    const [name,setName]= useState('')
    const inputRef = useRef(null)
    function focus () {
        inputRef.current.focus()
        console.log(inputRef.current)
    }
    focus()

  return (
    <>
    <input ref={inputRef} value={name} onChange={(e)=>setName(e.target.value)}/>
    <h1>My name is {name}</h1>
    
   
<button onClick={focus}>Focus the input</button>


    </>
  )
}

export default Focus