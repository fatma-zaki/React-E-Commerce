import Products from '../../component/products/Products';
import Slider from '../../component/slider/Slider';
import './home.css';
import OurStory from '../../component/ourStory/OurStory'
import Banner from '../../component/banner/Banner';
const Home = () => {
  return (
    <>
      < Slider />
      < Products />
      < Banner />
      < OurStory />
      
    </>
  )
}

export default Home