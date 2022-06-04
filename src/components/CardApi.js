 import { useEffect, useState} from 'react'
import { StyledCard, Grid, Row } from './styles/Card.styled'


export default function CardApi(index) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        const getData = async () => {
          try {
            const response = await fetch(
              'https://gtrend.yapie.me/'
            );
            if (!response.ok) {
              throw new Error(
                `This is an HTTP error: The status is ${response.status}`
              );
            }
            let actualData = await response.json();
            setData(actualData);
            setError(null);
          } catch(err) {
            setError(err.message);
            setData(null);
          } finally {
            setLoading(false);
          }  
        }
        getData()
      }, [])
      console.log(data)


      const dataAll =data && data.map ((list, id) => {
          return (
            <div  key={id}>
          
          <img src={list.avatar} alt={list.avatar}/>
         <title> {'Author :'+ list.author} </title>  &nbsp;
         <body>{'Name :'+ list.name}</body>  
         </div>
        
          
          )
          
      } )

    
    

  return (
    <StyledCard >
      <Grid>
      {loading?('loading') : error?('error') : (
      <Row>
     
        {dataAll}
     
    </Row>
     

    )}
        
      </Grid>
    </StyledCard>
  )
}