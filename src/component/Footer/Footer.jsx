import { Col, Container, Row } from 'react-bootstrap'
import './footer.css'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { PiInstagramLogoLight } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoSkype } from "react-icons/io";
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={3} className='mb-3'>
          <Link to='/'><h2>fashion</h2></Link>
          <p>© 2022 design and developed by</p>
          </Col>
          <Col xs={12} md={6} lg={3} className='mb-3'>
          <p>No. 651 – London Oxford Street,</p>
          <p>819 United Kingdom.</p>
          <Link><p className='linkP'>business@webflow.com</p></Link>
          <p>+0457547</p>
          </Col>
          <Col xs={12} md={6} lg={3} className='mb-4'>
          <p className="offer">GET 32% OFF</p>
          <p>By subscribe to our newsletter</p>
          <input type="text" />
          </Col>
          <Col xs={12} md={6} lg={3}>
          <h5>FOLLOW US ON</h5>
          <FaFacebookF/>
          <PiInstagramLogoLight />
          <RiTwitterXLine />
          <IoLogoSkype/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer