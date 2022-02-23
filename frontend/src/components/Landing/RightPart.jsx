import TwitterIcon from "@mui/icons-material/Twitter";
import { BootstrapButton } from './BootstrapButton';

import Stack from "@mui/material/Stack";
export const RightPart = () => {
  return (
    <div className="right_part">
      <div className="right_twitter">
        <TwitterIcon style={{ fontSize: "50px" }} />
      </div>
      <div className="right_text">
        <h1>Happening now</h1>
        <h2>Join Twitter today.</h2>
      </div>

      <div className="sign_up_btns">
        <Stack spacing={2}>
          <BootstrapButton variant="contained">Sign up</BootstrapButton>
          <BootstrapButton className="signIn_btn">Sign In</BootstrapButton>
        </Stack>
      </div>
    </div>
  );
};
