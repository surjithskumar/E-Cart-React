import React from 'react'
import { Button, Card } from 'react-bootstrap'

function Home() {
  return (
    <div style={{marginTop:"50px"}} className='container-fluid'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" width={"100%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrIjaQ0xgPi5FT9oRPoqfUCGibmrZOx41XZA&s" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <div className="d-flex justify-content-between">
        <Button variant="primary"><i class="fa-solid fa-heart"></i></Button>
        <Button variant="primary"><i class="fa-solid fa-cart-shopping"></i></Button>
        </div>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Home
