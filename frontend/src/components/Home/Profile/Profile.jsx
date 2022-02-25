import "./Profile.css";
import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import DateRangeRoundedIcon from "@mui/icons-material/DateRangeRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Post from "../Feed/Post";

export  const Profile = () => {
  let names = "SUNIL KUMAR VERMA";
  let type = "Tweets";
  let userid = "Sunilraj_verma";
  let join_date = "JANUARY 2022";
  let place = "JAIPUR";
  return (
    <div className="profile">
      <div className="name_div">
        <span className="profile_back_arrow">
          <ArrowBackSharpIcon />
        </span>
        <div>
          <p className="profile_name">{names}</p>
          <p>
            {50} {type}
          </p>
        </div>
      </div>
      <div className="profile_background_div">
        <img
          className="profile_background"
          src="https://pbs.twimg.com/profile_banners/424147534/1366933847/600x200"
          alt=""
        />
      </div>
      <div className="profile_pic_div">
        <img
          className="profile_pic"
          src="https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg"
          alt=""
        />

        <div className="">
          <p className="profile_pic_text">{names}</p>
          <p>@{userid} </p>
        </div>
      </div>
      <div className="editprofile_btn">
        <button>Edit Profile</button>
      </div>
      <div className="profile_place_div">
        <LocationOnOutlinedIcon /> <p className="center_profile">{place} </p>
        <DateRangeRoundedIcon />
        <p className="center_profile">Joined {join_date} </p>
      </div>
      <div className="profile_follwer_div">
        <p>{50} Following</p>
        <p>{50} Followers</p>
      </div>
      <div className="profile_post_header">
        <div className="tweets">Tweets</div>
        <div className="tweetsnreply">Tweets&Reply</div>
        <div className="media">Media</div>
        <div className="likes">Likes</div>
      </div>
      <div>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};
