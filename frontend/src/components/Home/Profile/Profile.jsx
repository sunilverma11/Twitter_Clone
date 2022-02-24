import "./Profile.css";
import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import DateRangeRoundedIcon from "@mui/icons-material/DateRangeRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

export const Profile = () => {
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
            {50} {type}{" "}
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
        <div>
          
        </div>
        <img
          className="profile_pic"
          src="https://pbs.twimg.com/profile_images/925429338920558592/EsmzEIJP_400x400.jpg"
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

      <div className="profile_place_div ">
        <LocationOnOutlinedIcon /> <p className="center_profile">{place} </p>
        <DateRangeRoundedIcon />
        <p className="center_profile">Joined {join_date} </p>
      </div>
    </div>
  );
};
