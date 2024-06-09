import './products.css'
import useFetchAxios from '../../fetchAxios/useFetchAxios';
import ProductCard from '../productCard/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import FilterBtns from '../filterBtns/FilterBtns';
import { useState } from 'react';
// import { useState } from 'react';
const Products = () => {
  const apiKey= 'https://fakestoreapi.com/products';
  const [fill] = useFetchAxios(apiKey)
  const [products, setProducts] = useState(fill)
  
  const filterProducts = (cat)=>{
    if(cat === 'all'){
      return setProducts(fill)
    }else{
      const filtercat = fill.filter((item)=> item.category === cat);
      return setProducts(filtercat)
    }
    
  }
  console.log(products)
  
  const [state] = useFetchAxios(apiKey);

  return (
    <>
    <Container >
    <FilterBtns
    filterProducts={filterProducts}
    state= {products}
    />
    <Row>
      {
      (products.length > 0)?products.map((item) =>
          (
            <Col key={item.id} xs={12} md={6} lg={4}>
              < ProductCard  title={item.title} img = {item.image} price={item.price}/>
            </Col>
          )
         ):state.map((item) =>
          (
            <Col key={item.id} xs={12} md={6} lg={4}>
              < ProductCard  title={item.title} img = {item.image} price={item.price}/>
            </Col>
          )
         )
         }
    </Row>
    </Container>
    </>
  )
}

export default Products;