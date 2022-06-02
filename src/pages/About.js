import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import { Button } from '../components/styles/Button.styled'
import { AboutHeader, MainBox} from '../components/styles/About.styled';



export default function About() {
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


      const dataAll =data && data.map ((list, index) => {
          return (
          <MainBox key={index} >
         <div> {'Author'+ list.author} </div>
         <div> {'Name'+ list.name} </div>
         <img src={list.avatar} alt={list.avatar}/>
          </MainBox>
          )
      } )
 

  return (
    <AboutHeader >
    <div id='about' >
    <h1>About</h1>
    <Button> <Link to="/">back to Home page</Link></Button>
    
    {loading?('loading') : error?('error') : (
        <div> 
        {dataAll}
        </div>

    )}
    </div>
    </AboutHeader>
  )
}
