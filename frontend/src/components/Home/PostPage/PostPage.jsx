import { useRecoilState } from "recoil"
import { TweetPageState } from "../../../recoil/modelAtom"


export const PostPage = ()=>{

    const [postpage,setPostpage] = useRecoilState(TweetPageState);
    return <div>
        <h1>Post Page is here:</h1>
        <button onClick={()=> setPostpage(false)}>back</button>
    </div>
}