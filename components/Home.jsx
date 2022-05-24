import React from 'react'
import {Button,Card} from 'react-bootstrap'

function Home() {
  return (
    <Card className='mx-auto my-10' style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://picsum.photos/200/300" height='250px' />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
    
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}

export default Home