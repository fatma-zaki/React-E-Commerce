import './products.css'
import useFetchAxios from '../../fetchAxios/useFetchAxios';
import ProductCard from '../productCard/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
const Products = () => {
  const [state] = useFetchAxios('https://fakestoreapi.com/products');

  return (
    <>
    {/* <div className="class"></div> */}
    <Container >
    <Row>
      {state.map((item) =>
       (
         <Col key={item.id} xs={12} md={6} lg={4}>
           < ProductCard  title={item.title} img = {item.image} price={item.price}/>
         </Col>
       )
      )}
    </Row>
    </Container>
    </>
  )
}

export default Products