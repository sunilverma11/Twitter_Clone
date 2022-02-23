import TwitterIcon from "@mui/icons-material/Twitter";

export const LeftImage = () => {
  return (
    <div className="image_container">
      <img
        className="image_background"
        src="./assets/leftLanImage.png"
        alt=""
      />
      <div className="image_icon_div">
        <TwitterIcon className="image_icon" />
      </div>
    </div>
  );
};
