import React,{useState} from 'react'
export default function TwowayBinding()
{
    const [name,setName]=useState("")
    const changeName=(event)=>setName(event.target.value)
    return(
        <div>TwowayBinding
            <input onChange={changeName} value={name}></input>
            <p>The name is {name}</p>

        </div>
    )
}