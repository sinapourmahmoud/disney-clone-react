import React, { useEffect } from 'react'
import styled from 'styled-components'
import UseFetching from '../Hooks/UseFetching'
const MainDiv=styled.div`
width: 100vw;
height: 100vh; 
background:url(${props=> props.backgroundImg});
background-repeat: no-repeat;
background-size:cover;
background-position: 70% 0;
position: relative;
`
const AbsoluteDiv=styled.div`
position: absolute;
width: 100%;
height: 100%;
background-color: rgba(0,0,0,0.5);
padding-bottom: 3rem;
padding-left:2rem;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-start;
z-index: 10;


h1{
  font-weight: bold;
  font-size: 2.2rem;

}

p{
  line-height: 1.5rem;
  color: rgba(255,255,255,0.8);
  font-size: 15px;
}
img{
    width: 60%;
    max-width: 400px;
    max-height: 400px;
    margin-bottom: 2rem;
    object-fit: contain;

  }
`
const ChildDiv=styled.div`
display: flex;

align-items: center;
gap: 1rem;
button{
  outline: none;
  cursor: pointer;
  padding: 0.8rem 1.3rem;
  font-size: 16px;
  border-radius: 5px;
  letter-spacing: 0.2rem;
  font-weight: 700;
}
.play-btn{
  border: 0;
  
  
}
.trailer{
border: 1px solid white;
background-color: rgba(0,0,0,0.4);
color: white;
}
.plus{

  font-size: 25px;
  width: 45px;
  height: 45px;
  display: flex;
  border: 2px solid white;
  cursor: pointer;
  align-items: center;
  justify-content: center;
background-color: rgba(0,0,0,0.4);
  border-radius: 50%;
}



`
export default function Inside() {
  const {data}=UseFetching()
  return (
    <MainDiv backgroundImg={data?.backgroundImg}>
        <AbsoluteDiv>
          <img src={data?.titleImg} />
       <ChildDiv>
       <button className='play-btn'>PLAY</button>
       <button className='trailer'>TRAILER</button>
       <div className='plus'>+</div>
       </ChildDiv>
       <h1 className='title'>{data?.title}</h1>
       <p>{data?.description}</p>
        </AbsoluteDiv>
    </MainDiv>
  )
}
