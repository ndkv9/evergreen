import styled from 'styled-components'
import { Container } from 'react-bootstrap'
import ModalComponent from '../Modal/Modal'

const HeroComponent = styled.header`
  padding: 5rem 0;
  height: 60vh;
  background-image: url('forest-bg.jpg');
  background-size: cover;
  background-position: center;
`

const HeaderContainer = styled.div`
  background-color: rgba(5, 148, 112, 0.4);
  padding: 3rem;
  color: white;
  width: 32.5rem;
`
const Heading = styled.h1`
  font-size: 5rem;
`
const SubHeading = styled.h3`
  margin: 1rem 0;
  font-weight: 400;
`

const Hero = () => {
  return (
    <HeroComponent>
      <Container>
        <HeaderContainer>
          <Heading>Evergreen</Heading>
          <SubHeading>Keep our life greener!</SubHeading>
          <ModalComponent text='Signup' variant='primary' />
          <ModalComponent text='Login' variant='danger' />
        </HeaderContainer>
      </Container>
    </HeroComponent>
  )
}

export default Hero
