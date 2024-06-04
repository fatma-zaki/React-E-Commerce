import './productCard.css'
import React from 'react'
import { Button, Card } from 'react-bootstrap'

const ProductCard = ({title, img, price}) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={img} />
      <Button>view product</Button>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
      $ {price}
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default ProductCard