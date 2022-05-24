import React from "react";
import { useState, useEffect } from "react";
import { useRef } from "react";
  
  
  function FilterData() {
  const [data, setData] = useState([]);
    const [filter, setFilter] = useState("");
    
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => setData(json))
    }, [])  
    console.table(data);
 

    return (
     <>
     <h1>hello</h1>
     </>
    )
  }
  
  export default FilterData