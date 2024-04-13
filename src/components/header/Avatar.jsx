import { Avatar as MuiAvatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

const Avatar = ({ sx, user }) => {
  const {
    username: { firstName, lastName },
  } = user;
  return (
    <MuiAvatar
      sx={{ ...sx, bgcolor: deepPurple[500] }}
    >{`${firstName[0]}${lastName[0]}`}</MuiAvatar>
  );
};

export default Avatar;
