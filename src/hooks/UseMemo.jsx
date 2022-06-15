import React,{useState} from 'react'

function UseMemo() {
    const [number,setNumber]=useState(0)
    const [dark,setDark]=useState(false)
    const doubleNumber=slowFunction(number)
    const themeStyles ={
        backgroundColor:dark?'#000':'#fff',
        color:dark?'#fff':'#000'

    }
  return (
    <div>
    <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
    <button style={themeStyles} onClick={()=>setDark(!dark)}>Change Theme</button>
    <div style={themeStyles}>{doubleNumber}</div>
    </div>
  )     
}
function slowFunction(number){
  
    return number*2
}

export default UseMemo