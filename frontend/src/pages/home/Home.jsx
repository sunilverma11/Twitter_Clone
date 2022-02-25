import Feed from "../../components/Home/Feed/Feed"
import Sidebar from "../../components/Home/Sidebar/Sidebar"
import Widgets from "../../components/Home/Widgets/Widgets"
import { useNavigate } from "react-router-dom"
import "./Home.css"

export const Home = ()=>{
    const navigate = useNavigate();
    const user = JSON.parse(sessionStorage.getItem('AuthToken'));
    if (!user){
        navigate('/signup')
    }
    return (
        <div className="home">

            {/* sidebar */}
            <Sidebar/>

            {/* feed */}
            {/* <Feed/> */}
          
            <Profile /> 
            
            {/* widgets */}
            <Widgets/>


        </div>
    )
}