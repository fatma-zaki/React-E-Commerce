import { Stack } from 'react-bootstrap'
import './cartItem.css'
import { useDispatch } from 'react-redux';
import { decreaseQuanCart, deleteOneFromCart, increaseQuanCart } from '../../rtk/slices/cartslice';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const CartItem = ({product}) => {
  
  const dispatch = useDispatch();
  return (
    <Stack direction='horizontal' gap={2} className='d-flex justify-content-between mb-3'>
    <div className="left">

    <div className="img">
                <img
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <div className="details">
                <h5 className="title">{product.title.substr(0, 12)}</h5>
                <p className="priceCart">$ {product.price} usd</p>
                {/* <button onClick={() => dispatch(increaseQuanCart(product))}> */}
                  {/* increase */}
                {/* </button> */}
                <button className='removeFromCart' onClick={() => dispatch(deleteOneFromCart(product))}>
                  remove
                </button>
              </div>
    </div>

              <div className="btns">
              <IoIosArrowUp onClick={() => dispatch(increaseQuanCart(product))} />
              <div className="cartInput">{product.quantity}</div>
              <IoIosArrowDown onClick={() => dispatch(decreaseQuanCart(product))}/>
              </div>

    </Stack>
  )
}

export default CartItem