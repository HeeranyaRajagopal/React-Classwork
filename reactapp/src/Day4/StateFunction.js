import { useState } from "react";
export default function StateFunction()
{
    const[carName,setCarName]=useState("Thar");
    const changeCar=()=>setCarName("BMW")
    const [count,setCount]=useState(0);
    const changeCount=()=>setCount(count+1)
    const decrCount=()=>setCount(count-1)
    return(
        <div>
            <h1>My car is {carName}</h1>
            <button onClick={changeCar}>Click me</button>
            <h1>Count {count}</h1>
            <button onClick={changeCount}>Increment</button>
            <button onClick={decrCount}>Decrement</button>
        </div>
    )
    
    }  