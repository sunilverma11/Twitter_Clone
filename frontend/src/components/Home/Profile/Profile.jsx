import "./Profile.css"
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';

export const Profile = () => {
let names="SUNIL KUMAR VERMA"
  let type = "Tweets"
  let userid = "Sunilraj_verma"
  let joinDate="23/02/2022"
    return (
      <div className="profile">
         
        <div className="name_div">
          
          <span className="profile_back_arrow"><ArrowBackSharpIcon /></span>
          <div>
            <p className="profile_name">{names}</p>
          <p>{50 } {type} </p>
          </div>
          
        </div>
        <div className="profile_background_div">
            <img className="profile_background" src="https://pbs.twimg.com/profile_banners/424147534/1366933847/600x200" alt="" />
        </div>
        <div className="profile_pic_div">
            <img className="profile_pic" src="https://pbs.twimg.com/profile_images/925429338920558592/EsmzEIJP_400x400.jpg" alt="" />
            <div className="">
            <p  className="profile_pic_text">{names}</p>
          <p>@{userid} </p>
          </div>
        </div>
        <div className="editprofile_btn">
          <button>Edit Profile</button>
        </div>
        
        </div>
    )
    }