import React from 'react'
export default function ListObj()
{
    const college=[{id:1, stuName:"Sachin", age:18},
                {id:2, stuName:"Daran", age:17},
                {id:3, stuName:"Gunal", age:20}]

    const display=college.map((col)=><li key={col.id}>{col.stuName} {col.age} </li>)  
    return(
        <div>
            <h1>List of students</h1>
            {display}
        </div>
    )         
}