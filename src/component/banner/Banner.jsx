import './banner.css'
import { Col, Container, Row } from 'react-bootstrap'
import img from '../../assets/banner.png'
const Banner = () => {
  return (
    <div className='banner'>
    <Container>
     <Row>
     <Col><img className='bannerImg' src={img} alt="" /></Col>
     <Col></Col>
     </Row>
    </Container>
    </div>
  )
}

export default Banner