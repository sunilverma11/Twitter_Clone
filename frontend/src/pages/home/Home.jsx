import Feed from "../../components/Home/Feed/Feed";
import Sidebar from "../../components/Home/Sidebar/Sidebar";
import Widgets from "../../components/Home/Widgets/Widgets";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { Profile } from "../../components/Home/Profile/Profile";
import { modelState, ProfileState,TweetPageState } from "../../recoil/modelAtom";
import { useRecoilState } from "recoil";
import { CommentModel } from "../../components/Home/Feed/Comment";
import { PostPage } from "../../components/Home/PostPage/PostPage";
export const Home = ()=>{
    const navigate = useNavigate();
    const user = JSON.parse(sessionStorage.getItem('AuthToken'));
    if (!user){
        navigate('/')
    }
    const [navProf,setNavProf] = useRecoilState(ProfileState);
    const [IsOpen,setIsOpen] = useRecoilState(modelState);
    const [postpage,setPostpage] = useRecoilState(TweetPageState);
    return (
        <div className="home">

          <Sidebar/>
      {/* feed */}
      {navProf ? <Profile trigger={setNavProf}/> : <Feed/>}
      {/* {TweetPageState ? <PostPage /> : <Feed/>} */}

      {IsOpen && <CommentModel/>}
      {/* {TweetPageState && navProf !== true (<PostPage/>)} */}
      {/* widgets */}
      <Widgets />
    </div>
  );
};
