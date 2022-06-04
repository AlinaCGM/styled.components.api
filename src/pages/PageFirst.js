import React, { useContext} from 'react'

import { AppContext } from '../components/context/AppContext'
import {Grid, Row} from '../components/styles/Card.styled'

function PageFirst() {
  const {apiDataText} = useContext(AppContext) 

  


  return (
    <>

   
    <Grid>
    <Row>
    {apiDataText.slice(1,9).map((text, id)=>
      (<div  key={id}>{text}</div>))}
    </Row>
    </Grid>
    </>
  )
}

export default PageFirst