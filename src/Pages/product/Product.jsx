import "./product.css";
import useFetchAxios from "../../fetchAxios/useFetchAxios";
import { useParams } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
// import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
// import { FaStarHalfAlt } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCart } from "../../rtk/slices/cartslice";

const Product = () => {

  const dispatch = useDispatch()
  let { id } = useParams();
  const apiKey = `https://fakestoreapi.com/products/${id}`;
  const product = useFetchAxios(apiKey);

  // console.log(product);

  return (
    <>
      <Container>
        {product.map((product) => (
          <Row key={product.id}>
            {/* {console.log(product)} */}
            <Col className="colparent" lg={6} md={12} sm={12}>
              <img
                src={product.image}
                alt={product.title}
                height="400px"
                width="400px"
              />
              <hr />
              <Row>
                <Col>
                  <img
                    src={product.image}
                    alt={product.title}
                    height="75px"
                    width="75px"
                  />
                </Col>
                <Col>
                  <img
                    src={product.image}
                    alt={product.title}
                    height="75px"
                    width="75px"
                  />
                </Col>
                <Col>
                  <img
                    src={product.image}
                    alt={product.title}
                    height="75px"
                    width="75px"
                  />
                </Col>
              </Row>
            </Col>
            <Col className="colparent" lg={6} md={12} sm={12}>
              <h4 className="category">{product.category}</h4>
              <h3 className="title">{product.title}</h3>
              <hr/>
              <p className="price">price: ${product.price}</p>
              <p className="rating">
                rating {product.rating && product.rating.rate}
                <FaStar />
              </p>
              <p className=" desc">{product.description}</p>
              <Row>
                <Col className="colQuan">
                  <div className="headQuan">quantity</div>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    max="20"
                    value="1"
                  />
                </Col>
                <Col className="colQuan">
                  <div className="headQuan">in stock</div>
                   <span>20</span>
                </Col>
              </Row>
              <Button className="add" onClick={()=> dispatch(addToCart(product))}> <IoIosAdd />add to cart </Button>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};

export default Product;
