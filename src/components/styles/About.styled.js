
import styled from 'styled-components'


export const Container = styled.div`
  border:1px solid red;
  
`
export const Item = styled.div`
  border:1px solid blue;
  width:50%;
  height:auto;
  padding:1rem;

`
export const MainBox= styled.div`
  border:1px solid green;
  
`
export const ImageAbout = styled.img`
  width: 20%;
  height: auto;
 
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`