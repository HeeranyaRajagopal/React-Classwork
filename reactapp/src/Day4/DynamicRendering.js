import React,{useState} from 'react'
const isLoggedin=false;

export default function DynamicRendering()
{
   if(isLoggedin)
   {
    return <p>Welcome back!</p>
   }
   else
   {
    return <p>Please log in!</p>
   }
}