import axios from 'axios'
import React,{useEffect,useState} from 'react'

export default function GetAxios() {
    const[name,setName]=useState([]);


    useEffect(()=>{
        axios.get('http://localhost:3002/user')
        .then(res=>{
            const store=res.data;
            setName(store);
        })
    })
  return (
    <div>
        <h1>The names are</h1>
        {name.map((person)=><li key={person.id}>{person.name}</li>)}
      
    </div>
  )
}
