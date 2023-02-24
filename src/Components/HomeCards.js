import React from 'react'
import styled from 'styled-components'
import disney from './../images/viewers-disney.png'
import pixar from './../images/viewers-pixar.png'
import marvel from './../images/viewers-marvel.png'
import national from './../images/viewers-national.png'
import disneyVid from './../videos/1564674844-disney.mp4'
import pixarVid from './../videos/1564676714-pixar.mp4'
import marvelVid from './../videos/1564676115-marvel.mp4'
import nationalVid from './../videos/1564676296-national-geographic.mp4'

const Container=styled.div`
margin-top: 6rem;

display: grid;
gap: 3rem;
grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
grid-auto-rows: 8rem;
@media screen and (min-width:768px){
    margin-top: 10rem;
    margin-bottom: 10rem;

}
`
const Card=styled.div`
background-color: transparent;
cursor: pointer;
border: 1px solid rgba(255,255,255,0.7);
box-shadow: 2px 10px 15px 13px  rgba(0,0,0,0.5);
position: relative;
border-radius: 5px;
transition: all 0.5s ease-in;
img{
    position: absolute;
    z-index: 4;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
video{
    position: absolute;
transition: all 0.5s ease-in;
    
    border-radius: 5px;
    opacity: 0;
    width: 100%; 
    height: 100%;
    object-fit: cover;
}
&:hover{
    @media screen and (min-width:768px) {
        
        transform: scale(1.05);
    }
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    video{
    opacity: 1;

}}
`
export default function HomeCards() {
  return (
    <Container>
        <Card>
            <img src={disney}/>
            <video autoPlay={true} loop={true} playsInline={true}>
          <source
            src={disneyVid}
            type="video/mp4"
          />
        </video>
        </Card>
        <Card>
        <img src={pixar}/>
        <video autoPlay={true} loop={true} playsInline={true}>
          <source
            src={pixarVid}
            type="video/mp4"
          />
        </video>
        </Card>
        <Card>
        <img src={marvel}/>
        <video autoPlay={true} loop={true} playsInline={true}>
          <source
            src={marvelVid}
            type="video/mp4"
          />
        </video>
        </Card>

        <Card>
        <img src={national}/>
        <video autoPlay={true} loop={true} playsInline={true}>
          <source
            src={nationalVid}
            type="video/mp4"
          />
        </video>

        </Card>
    </Container>
  )
}
