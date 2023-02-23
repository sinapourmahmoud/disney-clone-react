import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import Slide1 from './../images/slider-badging.jpg'
import Slide2 from './../images/slider-scale.jpg'
import Slide3 from './../images/slider-badag.jpg'
import Slide4 from './../images/slider-scales.jpg'
import styled from 'styled-components'
const Carousel=styled(Slider)`
padding: 0;
width: 100%;
position: relative;
margin-top: 2rem;
display: flex;
gap: 2rem;
.slick-list{
    overflow: inherit;
}

.slick-dots li button{
    background-color: rgba(255,255,255,0.1);
    border-radius: 50%;
    margin-top: 2rem;
}
.slick-dots li.slick-active button{
    background-color: rgba(255,255,255,1);
}
.slick-arrow{
    opacity: 0;
    z-index: 10;
    transition: all 0.3s ease-in ;
    &:hover{
        opacity: 1;
    }
}
`
const SlideBox =styled.div`

position: relative;

a{
    padding: 4px;
   box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
      position: relative;
      width: 100%;
      display: block;
      height: 100%;
      overflow: hidden;
      img{
          width:100%;
          height: 100%;
          transition: all 0.3s ease-in;
        }
        &:hover{
        transition: all 0.3s ease-in;
        padding: 0;
        border: 4px solid white;
        img{
            transform: scale(1.2);
        }

    }
}
`

export default function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };
  return (
    <Carousel {...settings}>
    <SlideBox>
    <a href='#'><img src={Slide1}  /></a>
    </SlideBox>
       <SlideBox>
       <a href='#'><img src={Slide2}  /></a>
       </SlideBox>
       <SlideBox>
       <a href='#'><img src={Slide3}  /></a>
       </SlideBox>
       <SlideBox>
       <a href='#'><img src={Slide4}  /></a>
       </SlideBox>
    </Carousel>
  )
}
