import { Stack } from 'react-bootstrap'
import './cartItem.css'
import { useDispatch } from 'react-redux';
import { deleteOneFromCart, increaseQuanCart } from '../../rtk/slices/cartslice';

const CartItem = ({product}) => {
  
  const dispatch = useDispatch();
  return (
    <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
    <div className="img">
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
              <div className="details">
                <h5 className="title">{product.title.substr(0, 12)}</h5>
                <p className="price">$ {product.price} usd</p>
                <button onClick={() => dispatch(increaseQuanCart(product))}>
                  increase
                </button>
                <button onClick={() => dispatch(deleteOneFromCart(product))}>
                  remove
                </button>
              </div>
              <input type="number" name="" id="" value={product.quantity} />

    </Stack>
  )
}

export default CartItem