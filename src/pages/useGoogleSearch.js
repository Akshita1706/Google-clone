import {useState,useEffect} from 'react'
import API_KEY from '../keys'

const CONTEXT_KEY='783b1fe47a4f045de'
//we got this from https://cse.google.com/cse/create/new ,then edit search negine--setup--search entire web page (on) and key copied

const useGoogleSearch=(term)=> {
  const[data,setData]=useState(null)

  useEffect(()=>{
  const fetchData=async()=>{
    fetch(`https://customsearch.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`).then(response=>response.json()).then(result=>{setData(result)})
}
fetchData()    },   [term])
  return {data}
}

export default useGoogleSearch