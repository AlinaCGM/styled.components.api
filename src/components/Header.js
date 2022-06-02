
  
import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled'
import {Link} from "react-router-dom";
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { Button } from './styles/Button.styled'

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src='../images/logo192.png' alt='' />
          <Button> <Link to="/about">About</Link></Button>
         
        </Nav>

        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>

            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>

            <Button bg='#ff0099' color='#fff'>
              Get Started For Free
            </Button>
          </div>

          <Image src='./images/illustration-mockups.jpg' alt='' />
        </Flex>
      </Container>
    </StyledHeader>
  )
}