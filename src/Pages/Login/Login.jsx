import { Col, Row } from 'react-bootstrap'
import PagesTitle from '../../component/pagesTitle/PagesTitle'
import './login.css'
import img from './../../assets/login.svg'
const Login = () => {
  return (
    <section className='login'>  
      < PagesTitle title='login'/>
      <Row>
<Col>
<img src={img} alt="" />
</Col>
<Col>

      <form>
    
      </form>
</Col>
      </Row>
    </section>
  )
}

export default Login