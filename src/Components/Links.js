import React from 'react'
import styled from 'styled-components'
const ABox=styled.a`
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1.5px;
    display: none;
    @media screen and (min-width:768px){
      display: block;
    }
`
export default function Links() {
  return (
    <ABox href='#'>Links</ABox>
  )
}
