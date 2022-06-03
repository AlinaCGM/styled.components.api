import React, { useContext }from 'react'
import { AppContext } from '../components/context/AppContext'
import {ContainerPage2} from '../components/styles/Page.styled'

function PageSecond() {
    const {apiDataText} = useContext(AppContext) 
  return (
    <ContainerPage2>
    <h1>PageSecond</h1>

    {apiDataText}
    </ContainerPage2>
  )
}

export default PageSecond