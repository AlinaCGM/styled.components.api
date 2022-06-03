import React, { useContext }from 'react'
import { AppContext } from '../components/context/AppContext'
import {ContainerPage3} from '../components/styles/Page.styled'


function PageThird() {
    const {apiDataText} = useContext(AppContext) 
  return (
    <ContainerPage3>
   
    
    {apiDataText.slice(3,6).map((text, id)=>
      (<div  key={id}>{text}</div>))}

    </ContainerPage3>
  )
}

export default PageThird