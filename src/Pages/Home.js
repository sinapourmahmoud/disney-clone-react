import React from 'react'
import styled from 'styled-components'
import ImageSlider from '../Components/ImageSlider'
import backgroundIMG from './../images/home-background.png'
const HomeBox=styled.div`
width: 100%;
position: relative;
min-height:100vh;
padding: 80px 0 0 0 ;
overflow-x: hidden;
&:after {
    background: url(${backgroundIMG}) center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`
const Container=styled.div`
width: 98%;
margin-inline: auto;
max-width: 1200px;
`
export default function Home() {
  return (
    <HomeBox>


           <Container>
        <ImageSlider/>
            
            </Container> 
    </HomeBox>
  )
}
