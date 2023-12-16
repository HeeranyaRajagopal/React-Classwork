import React from 'react'
function Displayname (props)
{
    return(
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}
export default function ListProps()
{
const studentName=["heeranya","janani","bhuvi","abi"]
const stName=studentName.map((stu)=><Displayname name={stu}></Displayname>)
return(
    <div>
    {stName}
    </div>
)
}