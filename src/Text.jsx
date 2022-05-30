import React from 'react'
import { useState } from 'react'

function Text() {
    const firstText = 'Hello World'
    const buttonText = '...read more'
    const [text, setText] = useState(firstText)
    const [textButton, setTextButton] = useState(buttonText)
    const handleData = () => {
        if (text === firstText) {
            setText('LOREM IPSUM')
            setTextButton('...read less')
        } else {
            setText('Hello World')
                    setTextButton('...read more')
        } 
    } 
  return (
      <>
    <div>{text}<button onClick={handleData} >{textButton}</button></div>
      </>
  )
}

export default Text