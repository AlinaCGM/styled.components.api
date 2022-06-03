import React, { useContext} from 'react'
import {ContainerPage1,Row} from '../components/styles/Page.styled'
import { AppContext } from '../components/context/AppContext'


function PageFirst() {
  const {apiDataText} = useContext(AppContext) 

  


  return (
    <>

   
    <ContainerPage1>
    <Row>
    {apiDataText.slice(1,4).map((text, id)=>
      (<div  key={id}>{text}</div>))}
    </Row>
    </ContainerPage1>
    </>
  )
}

export default PageFirst