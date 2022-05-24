import React,{useEffect,useState} from 'react'

function UseEffect() {
    const [resource,setResource] = useState('posts')
    const [data,setData] = useState([])
    useEffect(()=>{
        console.log('useEffect')
        fetch(`https://jsonplaceholder.typicode.com/${resource}`)
        .then(res=>res.json())
        .then(data=>setData(data))
        console.log(data)

    },[resource])
  return (
    <div>
    <div>
        <button onClick={()=>setResource('posts')}>Posts</button>
        <button onClick={()=>setResource('todos')}>Todos</button>
        <button onClick={()=>setResource('users')}>Users</button>
    </div>
    <h1>{resource}</h1>
    <ul>
        {data.map(item=>(
            <li key={item.id}>{item.title}</li>
        ))}
    </ul>
    </div>
        
  )
}

export default UseEffect