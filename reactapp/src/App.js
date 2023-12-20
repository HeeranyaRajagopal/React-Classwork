import DeleteAxios from "./Day11/DeleteAxios";
import GetAxios from "./Day11/GetAxios";
import PostAxios from "./Day11/PostAxios";
import PutAxios from "./Day11/PutAxios";

export default function App()
{
  return(
    <div>
     <GetAxios/>
     <PostAxios/>
     <PutAxios/>
     <DeleteAxios/>
    </div>
  )
}