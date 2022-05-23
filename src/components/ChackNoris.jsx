import React from 'react'
const Button = (prop) => {
    return <button onClick={prop.callApi}>
    jokes category
     </button>;
}


export const ChackNoris = () => {
    const [category, setBtn] = React.useState([])
    const getButton = () => {
        // Fetching data from the API
            fetch("https://api.chucknorris.io/jokes/categories")
            .then((res) => res.json())
            .then((data) => setBtn(data));
            console.log(category)
    }
    const [joke, setJoke] = React.useState('')
const getJoke = (e) => {
    fetch(`https://api.chucknorris.io/jokes/random?category=${e}`)
    .then((res) => res.json())
    .then((data) => setJoke(data))
    console.log(joke)
}

  return (
      <>
   <h1>Chack noris jokes</h1>
    <Button callApi={getButton} />
   <p>
   
      { category.map((e) => <Button callApi={getJoke} category={e} />)}
  
       
   </p>
    </>
)

    

  
  }
