import {useEffect, useState} from 'react'
import { database } from '../Firebase/firebase'
import { doc,getDoc } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
export default function UseFetching(){
    let [data,setData]=useState({})
    let param=useParams()
useEffect(()=>{
let collectionRef=doc(database,'movies',param.id)

getDoc(collectionRef)
.then(res=>{
setData(res.data())
})
.catch(err=>{
    console.log(err)
})
},[param.id])
return{
    data
}

}