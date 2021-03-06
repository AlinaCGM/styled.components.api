import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import { Button } from '../components/styles/Button.styled'
import { Container, MainBox, ImageAbout,Item} from '../components/styles/About.styled';
import {ImagePage} from '../components/styles/Page.styled';

import { AppContext } from '../components/context/AppContext'
import PageFirst from './PageFirst';
import PageSecond from './PageSecond';
import PageThird from './PageThird';
import { useFetchCustom } from '../useFetchCustom';






export default function About() {
    const [data, setData] = useState();
    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    const { dataCustom} = useFetchCustom();   
    const [pageFirst, setPageFirst] = useState(false);   // all the hooks in one place
    const [pageSecond, setPageSecond] = useState(false);
    const [pageThird, setPageThird] = useState(false);
    const [show, setShow] = useState();
  
    const apiData = dataCustom.map((content) => (    // mapping and storing the data from the custom hook
    <>
      {loading && <h1>Loading...</h1>}
      {dataCustom && (
        <>
       
          <ImagePage src={content.download_url} alt='img' />
         
        </>
      )}
    </>
  ))
  const apiDataText = dataCustom.map((text) => (   // data with pictures and text to use in cards
  <> 
    {loading && <h1>Loading...</h1>} 
    {dataCustom && (
      <>
    
        <ImagePage  src={text.download_url} alt='img' />
      {text.author}
    
      </>
    )}
  </>
))
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
          <ImageAbout src={list.avatar} alt={list.avatar}/>
         <Item> {'Author :'+ list.author} &nbsp;
          {'Name :'+ list.name} 
         
         </Item> 
          </MainBox>
          )
          
      } )
  const mainShow = () => {
    setShow (!show)
  }


  return (
    <Container >
    <div id='about' >
    <h1>About</h1>
    <Button> <Link to="/">back to Home page</Link></Button>
    <span>
    <Button  
        onClick={() => {
          setPageFirst(true)   // buttons logics
          setPageSecond(false)
          setPageThird(false)
         
          setPageFirst(!pageFirst)
            }} >
           Page1
            </Button>
    </span>
    <span>
    <Button 
        onClick={() => {
          setPageFirst(false)   // buttons logics
          setPageSecond(true)
          setPageThird(false)
         
          setPageSecond(!pageSecond)
            }} >
              Page2
            </Button>
    </span>
    <span>
    <Button 
          onClick={() => {
          setPageFirst(false)   // buttons logics
          setPageSecond(false)
          setPageThird(true)
         
          setPageThird(!pageThird)
            }} >
        Page3
            </Button>
    </span>
    <div>
    

  <AppContext.Provider value={{ setPageFirst, setPageSecond,setPageThird, apiData, apiDataText }}>   
            {pageFirst && <PageFirst />}
            {pageSecond && <PageSecond />}
            {pageThird && <PageThird />}
            
  </AppContext.Provider>
       </div>
    
    {loading?('loading') : error?('error') : (
      
      <div>
        {show? (<div> 
        <Button onClick={mainShow}>HIDE</Button>
      
        {dataAll}
     
        </div>) : (
        <Button onClick={mainShow}>SHOW</Button>)
       }
      </div>
     

    )}
    
    </div>
   

          )

    </Container>
  )
}

