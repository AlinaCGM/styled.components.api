import React, { useContext }from 'react'
import { AppContext } from '../components/context/AppContext'
import {ContainerPage2} from '../components/styles/Page.styled'

function PageSecond() {
    const {apiDataText} = useContext(AppContext) 
  return (
    <ContainerPage2>
   

    {apiDataText.slice(2,5).map((text, id)=>
      (<div  key={id}>{text}</div>))}

    </ContainerPage2>
  )
}

export default PageSecond