import Feed from "../../components/Home/Feed/Feed"
import Sidebar from "../../components/Home/Sidebar/Sidebar"
import Widgets from "../../components/Home/Widgets/Widgets"
import { Profile } from "../../components/Home/Profile/Profile"
import { EditProfile } from "../../components/Home/Profile/EditProfile"
import "./Home.css"

export const Home = ()=>{
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