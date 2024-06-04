
import { Container } from 'react-bootstrap';
import './slider.css'
import Carousel from 'react-bootstrap/Carousel';
import Img1 from "../../assets/imgSlide1.png";
import Img2 from "../../assets/imgSlide2.png";
import Img3 from "../../assets/imgSlide3.png";
import { Link } from 'react-router-dom';

//slider using react-bootstrap

function Slider() {

  return (
    <Container>
    <Carousel>
    <Carousel.Item>
          <div className="inner">
          <div className="left observed">
            <span>special price</span>
            <h2>New Product Collection</h2>
            <Link to='/shop'><button>DISCOVER MORE</button></Link>
              
          </div>
          <div className="right">  
          <div className="circle"></div>
           <img src={Img1} alt="" />
          </div>
          </div>
      </Carousel.Item>
      <Carousel.Item>
          <div className="inner">
          <div className="left observed">
            <span> TOP TRENDING 2023</span>
            <h2>SUMMER '23 COLLECTIONS</h2>
            <Link to='/shop'><button>DISCOVER MORE</button></Link>
            
          </div>
          <div className="right">          
           <img src={Img2} alt="" />
          </div>
          </div>
      </Carousel.Item>
      <Carousel.Item>
<div className="inner">
<div className="left observed">
            <span>Special Offer Session.</span>
            <h2 className='last'>FASHION THAT EXISTS IN EVERYTHING </h2>
            <h3>40% Discount</h3>
            <Link to='/shop'><button>DISCOVER MORE</button></Link>
          </div>
          <div className="right"> 
          <img src={Img3} alt="" />
           </div>
</div>
      </Carousel.Item>
    </Carousel>
    </Container>
  );
}

export default Slider;