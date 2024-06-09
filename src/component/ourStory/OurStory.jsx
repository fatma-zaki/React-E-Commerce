import { Container } from 'react-bootstrap'
import './ourStory.css'

const OurStory = () => {
  return (
    <Container>
     <div className="ourStory">

      <h2 className="ourStoryHeader"> Our Story </h2>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered <br/> alteration in injected humour, or randomise
        Contrary to popular belief Lorem Ipsum
      </p>
      <p className='secondP'>
        Alteration in some form injected humour words which don’t even slightly
        believable. If you are going use passage of Lorem Ipsum,<br/> you need to be
        sure there isn’t anything embarrassing hidden Alterationsome form
        injected humour words which don’t even slightly believable. If you going
        use passage humour words which don’t even slightly believable.
      </p>
     </div>
    </Container>
  );
}

export default OurStory