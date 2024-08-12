import "./cart.css";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasTitle,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  // clearCart
  closeCart
} from "../../rtk/slices/cartslice";
import CartItem from "../../component/cartItem/CartItem";
// import CartItem from "../../component/cartItem/CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const isOpen = useSelector((state) => state.cart.toggle);


  const dispatch = useDispatch();

  const subtotal = cart.reduce(
    (acc, product) => (acc += product.price * product.quantity),
    0
  );

  return (
    <Offcanvas show={isOpen} placement="end" onHide={()=>dispatch(closeCart())}>
      <OffcanvasHeader closeButton>
        <OffcanvasTitle> your cart </OffcanvasTitle>
      </OffcanvasHeader>
        <hr/>

      {
        cart.length === 0 ?
      <p className="noItems">No items found</p> :
      <Offcanvas.Body>
        <div className="items-area">
          
        {cart.map((product) => (
          <Row key={product.id}>
            <CartItem product={product}/>
          </Row>
        ))}
        </div>
        <div className="cartFoot">
        <hr />
        
        <div className="subtotal">
          <h5>
            subtotal:
          </h5>
        <p>
          
        $ {subtotal} usd
        </p>
        </div>
        <button className="checkout">continue to checkout </button>
        
        </div>
      </Offcanvas.Body> 
      }
    </Offcanvas>
  );
};

export default Cart;
