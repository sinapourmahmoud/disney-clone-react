import React,{useContext} from 'react'
import styled from "styled-components";
import backImg from './../images/login-background.jpg'
import topImage from './../images/cta-logo-one.svg'
import topImage2 from './../images/cta-logo-two.png'

const Container=styled.section`
    height: 100vh;
    position: relative;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    background-image: url(${backImg}) !important;
`
const Wrap=styled.div`
    width: 95%;
    max-width: 600px;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    margin-inline: auto;

`
const TopImage=styled.img`
    width: 90%;
    display: block;
    margin-inline: auto;
    @media screen and (min-width:768px) {
        width:35rem
    }
   
`
const LoginBTN =styled.a`
cursor: pointer;
 font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 4px;
`
const Description=styled.p`
text-align: center;
line-height: 1.25rem;
color: rgba(255,255,255,0.8);
    font-weight: 400;
    letter-spacing: 1px;
`
 function Login() {

  return (
    <Container>
        <Wrap>
            <TopImage src={topImage} />
            <LoginBTN >GET ALL THERE</LoginBTN>
            <Description>
            al distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites 
            </Description>
            <TopImage src={topImage2} />
        </Wrap>
    </Container>
  )
}
export default Login
