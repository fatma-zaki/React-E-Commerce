import { Col, Row } from 'react-bootstrap'
import PagesTitle from '../../component/pagesTitle/PagesTitle'
import './signup.css'
import img from './../../assets/signup.svg'

const Signup = () => {
  return (
    <div>
    < PagesTitle title='signup'/>

    <Row>
<Col>
<img src={img} alt="" />
</Col>
<Col>

      <form>
    
      </form>
</Col>
      </Row>

    </div>
  )
}

export default Signup