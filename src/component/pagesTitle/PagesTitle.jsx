import  './pagesTitle.css'
import { Container } from 'react-bootstrap'

const PagesTitle = ({title}) => {
  return (
     <Container>
          
    <header className='header'>
     <h2>{title}</h2>
    </header>
     </Container>
  )
}

export default PagesTitle