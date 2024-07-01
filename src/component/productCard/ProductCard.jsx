import './productCard.css'
import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProductCard = ({title, img, price, id}) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={img} />
      <Button>
    <Link to={`/products/${id}`}>view product</Link>
        </Button>
    <Card.Body>
      <Card.Title>{title.substring(0, 15)}...</Card.Title>
      <Card.Text>
      $ {price}
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default ProductCard