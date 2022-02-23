import Feed from "../../components/Home/Feed/Feed"
import Sidebar from "../../components/Home/Sidebar/Sidebar"
import Widgets from "../../components/Home/Widgets/Widgets"
import { Temp } from "../../components/Home/Profile/temp"
import "./Home.css"

export const Home = ()=>{
    return (
        <div className="home">

            {/* sidebar */}
            <Sidebar></Sidebar>

            {/* feed */}
            {/* <Feed/> */}
            <Temp/>
            {/* widgets */}
            <Widgets/>

        </div>
    )
}