import React,{useState} from 'react'
import Form from 'react-bootstrap/Form'

function Time() {
const [time,SetTime] = useState({
    hour:0,
    minute:0,
    second:0,
})
const handleChangeHours = (e) =>{
    SetTime({seconds
        :e.target.value*60*60,
        minutes:e.target.value*60,
        hours:e.target.value,})
}
const handleChangeSeconds = (e) =>{
    SetTime({seconds
        :e.target.value,
        minutes:e.target.value/60,
        hours:e.target.value/60/60,})
}
const handleChangeMinutes = (e) =>{
    SetTime({seconds
        :e.target.value*60,
        minutes:e.target.value,
        hours:e.target.value/60,})
}

    return (
        <>
     <form>
        <label>
          seconds:
          <Form.Control onChange={handleChangeSeconds} value={time.seconds} type="number"  />
          minutes:
          <Form.Control type="number" onChange={handleChangeMinutes} value={time.minutes} />
          hours:
          <Form.Control onChange={handleChangeHours} value={time.hours} type="number" />
        </label>
       
      </form>
        </>
  )
}

export default 
Time