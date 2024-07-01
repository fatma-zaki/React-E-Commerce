import { Button, Form} from 'react-bootstrap';
import './header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AiOutlineUser , AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import Cart from '../../Pages/cart/Cart';
// import { Link } from 'react-router-dom';
const Header = () => {
const cart = useSelector(state => state.cart)

const count = cart.reduce((acc, product) => 
  acc += product.quantity
,0)

  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container>
        <Navbar.Brand className="me-auto" as={Link} to="/">
          fashion
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className="mr-5" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              about
            </Nav.Link>
            <Nav.Link as={Link} to="/shop">
              shop
            </Nav.Link>
            <NavDropdown title="pages" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/blog">
                blog
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/login">
                login
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/signup">
                signup
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact">
              contact
            </Nav.Link>
          </Nav>
          <Form className="d-flex me-auto">
            <Form.Control
              type="search"
              placeholder="Search..."
              className=""
              aria-label="Search"
            />
            <Button variant="outline">
              <AiOutlineSearch />
            </Button>
          </Form>
        </Navbar.Collapse>
        <Link to="/login">
          
          <AiOutlineUser />
        </Link>
        <Link to="/cart" className='cartIcon'> 
          <AiOutlineShoppingCart />
          <span className='count'> 
          {count}
             </span>
        </Link>
      </Container>
    </Navbar>
  );
  
}

export default Header