import Feed from "../../components/Home/Feed/Feed"
import Sidebar from "../../components/Home/Sidebar/Sidebar"
import Widgets from "../../components/Home/Widgets/Widgets"
import "./Home.css"

export const Home = ()=>{

    return (
        <div className="home">

            {/* sidebar */}
            <Sidebar/>

            {/* feed */}
            <Feed/>

            {/* widgets */}
            <Widgets/>


        </div>
    )
}