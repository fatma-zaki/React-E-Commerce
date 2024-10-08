import "./banner.css";
import { Col, Container, Row } from "react-bootstrap";
import img from "../../assets/banner.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <Row>
          <Col lg={6} md={9} sm={12}>
            <img className="bannerImg" src={img} alt="" />
          </Col>
          <Col className="bannerInfo" lg={6} md={3} sm={12}>
            <span>save 50%</span>
            <p className="">deal of the day</p>
            <h2>fashoin women's hat</h2>
            <div className="cost">
              <span className="">$39.9</span>
              <span className="secondCost">$79.90</span>
            </div>
            <Link to="/shop">shop now</Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
