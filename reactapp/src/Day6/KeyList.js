export default function KeyList()
{
    const fruits=["apple","orange","mango","guava"]
    const result=fruits.map((fru,index)=><li key={index}>{index} {fru}</li>)
    return(
        <div>
            <ul type="none">
                {result}
            </ul>
        </div>
    )
}