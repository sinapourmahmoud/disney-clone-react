import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const CardStyled=styled.div`
border-radius: 5px;
border: 1px solid rgba(255,255,255,0.7);
position: relative;
transition:all 0.3s ease-in;
overflow: hidden;

    cursor: pointer;
    &::before{
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      transition: all 0.3s ease-in;
      top: 0;
      left: 0;
      background-color: rgba(0,0,0,0.3);
      opacity: 0;
      z-index: 3;
    }
    img{
      width:100%;
      height: 100%;
transition:all 0.3s ease-in;

      object-fit: cover;
        }
    &:hover{
      img{
        transform: scale(1.1);
      }
      &::before{
      opacity: 1;
      }
    }
`
export default function RecommendingCards({item}) {
  const navigate=useNavigate()
  const insertCard=()=>{
    const id=item.id
    navigate(`/inside/${id}`)
  }

  return (
    <CardStyled onClick={insertCard}>
      <img src={item.data().backgroundImg}/>
    </CardStyled>
  )
}
