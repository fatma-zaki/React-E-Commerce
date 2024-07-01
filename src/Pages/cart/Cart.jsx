import './cart.css'
import { Col, Row } from 'react-bootstrap'
import { IoCloseSharp } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, deleteOneFromCart, increaseQuanCart } from '../../rtk/slices/cartslice'



const Cart = () => {


const cart = useSelector(state => state.cart)

const dispatch = useDispatch()


const subtotal = cart.reduce((acc, product) => 
  acc += product.price * product.quantity
,0)

  return (
    <div className='cart'>
      <Row>
        <Col><h2>your cart</h2></Col>
        <Col><IoCloseSharp/></Col>
      </Row>
      <hr />
      <p>total: {subtotal}</p>
      {
        cart.map((product) => (

      <Row key={product.id}>
        <Col className='productInfo'>
        <div className="img"><img src={product.image} alt={product.title} style={{width:'100px', height:'100px'}} /></div>
        <div className="details">
          <h5 className="title">{product.title.substr(0,12)}</h5>
          <p className="price">$ {product.price} usd</p>
          <button onClick={()=> dispatch(increaseQuanCart(product))}>increase</button>
          <button onClick={()=> dispatch(deleteOneFromCart(product))}>remove</button>
        </div>
        </Col>
        <Col>
        <input type="number" name="" id="" value={product.quantity}/>
        </Col>
      </Row>
        
      ))
    }
    {/* <Row>
    <button onClick={()=> dispatch(clearCart())}></button>
    </Row>
    <Row>
    <button>continue to checkout</button>
    </Row> */}
  </div>
  )
}

export default Cart