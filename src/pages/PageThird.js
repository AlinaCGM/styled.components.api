import React, { useContext }from 'react'
import { AppContext } from '../components/context/AppContext'
import {ContainerPage3} from '../components/styles/Page.styled'


function PageThird() {
    const {apiDataText} = useContext(AppContext) 
  return (
    <ContainerPage3>
    <h1>PageThird</h1>
    
      {apiDataText}
    </ContainerPage3>
  )
}

export default PageThird