import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import ImageSlider from '../Components/ImageSlider'
import HomeCards from '../Components/HomeCards'
import backgroundIMG from './../images/home-background.png'
import RecommendingCards from '../Components/RecommendingCards'
import {app,database} from './../Firebase/firebase.js'
import { collection,getDocs } from 'firebase/firestore'
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
    overflow-x: hidden;
  }
`
const Container=styled.div`
width: 98%;
margin-inline: auto;
max-width: 1200px;
`
const Title=styled.h3`
margin: 1rem 0;
`
const RecommendingBox=styled.div`
margin: 2rem 0;
display: grid;
grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
grid-auto-rows: 10rem;
gap: 2rem;
`

export default function Home() {
  console.log('home')
  let [trending,setTrending]=useState(null)
  let [news,setNews]=useState(null)
  let [original,setOriginal]=useState(null)
  let [recommend,setRecommend]=useState(null)
  const collectionRef=collection(database,'movies')
  useEffect(()=>{
      getDocs(collectionRef)
      .then(res=>{
        let recommend=  res.docs.filter(item=> item.data().type=='recommend' )
        let news=  res.docs.filter(item=> item.data().type=='new' )
        let original=  res.docs.filter(item=> item.data().type=='original' )
        let trending=  res.docs.filter(item=> item.data().type=='trending' )
          setNews(news)
          setOriginal(original)
          setTrending(trending)
          setRecommend(recommend)

      })
      .catch(err=>{
       alert(err.massege)
      })
  },[])
  return (
    <HomeBox>

 
           <Container>
        <ImageSlider/>
            <HomeCards/>
      <>
            <Title>Recommended For You</Title>

            <RecommendingBox>

              {recommend?.map((item,key)=> <RecommendingCards item={item} key={key}/>)}

            </RecommendingBox>
            
            </>
      <>
            <Title>News For You</Title>

            <RecommendingBox>

            {news?.map((item,key)=> <RecommendingCards item={item} key={key}/>)}


            </RecommendingBox>
            
            </>
      <>
            <Title>Originals For You</Title>

            <RecommendingBox>

            {original?.map((item,key)=> <RecommendingCards item={item} key={key}/>)}


            </RecommendingBox>
            
            </>
      <>
            <Title>Trendings For You</Title>

            <RecommendingBox>

            {trending?.map((item,key)=> <RecommendingCards  item={item} key={key}/>)}


            </RecommendingBox>
            
            </>
            </Container> 
    </HomeBox>
  )
}
