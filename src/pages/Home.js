
import { ThemeProvider } from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
import { Container } from '../components/styles/Container.styled'
import GlobalStyles from '../components/styles/Global'
import content from '../content'
import CardApi from '../components/CardApi'


const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
}


function Home() {
  return (
  
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        
        </Container>
        <Footer />
      </>
      <CardApi/>
    </ThemeProvider>
   
  )
}

export default Home
