import React, { useContext } from 'react'
import {ContainerPage1} from '../components/styles/Page.styled'
import { AppContext } from '../components/context/AppContext'

function PageFirst() {
  const {apiDataText} = useContext(AppContext) 
  return (
    <>
    <div>PageFirst</div>
    <ContainerPage1>
    
   
    {apiDataText}
    </ContainerPage1>
    </>
  )
}

export default PageFirst