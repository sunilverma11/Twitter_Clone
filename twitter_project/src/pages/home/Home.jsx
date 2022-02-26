import Feed from "../../components/Home/Feed/Feed";
import Sidebar from "../../components/Home/Sidebar/Sidebar";
import Widgets from "../../components/Home/Widgets/Widgets";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { Profile } from "../../components/Home/Profile/Profile";
import { modelState, ProfileState } from "../../recoil/modelAtom";
import { useRecoilState } from "recoil";
import { CommentBox } from "../../components/Home/Feed/Comment";
export const Home = ()=>{
    const navigate = useNavigate();
    const user = JSON.parse(sessionStorage.getItem('AuthToken'));
    if (!user){
        navigate('/')
    }
    const [navProf,setNavProf] = useRecoilState(ProfileState);
    const [IsOpen,setIsOpen] = useRecoilState(modelState);
    return (
        <div className="home">

          <Sidebar/>
      {/* feed */}
      {IsOpen && <CommentBox trigger={setIsOpen}/>}
      {navProf ? <Profile trigger={setNavProf}/> : <Feed/>}

      {/* widgets */}
      <Widgets />
    </div>
  );
};
