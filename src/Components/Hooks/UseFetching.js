import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {database} from './../../Firebase/firebase'
import { doc,getDoc } from 'firebase/firestore'
export default function UseFetching() {
    const [item,setItem]=useState(null)
    const param=useParams()
    useEffect(()=>{
        const collectionRef=doc(database,'movies',param.id)
        getDoc(collectionRef)
        .then(res=>{
           setItem(res.data())
           console.log(res.data())
        })
        .catch(err=>{
            console.log(err)
        })
    },[param.id])

    return{
        data:item
    }
}
