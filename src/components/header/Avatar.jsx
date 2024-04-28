import { IconButton, Menu, MenuItem, Avatar as MuiAvatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { useState } from "react";
import { useUser } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../models/routeModel";

const Avatar = ({ sx, user }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { logoutUser } = useUser();
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logoutUser();
    handleClose();
    navigate(ROUTES.LOGIN.path);
  };

  const {
    username: { firstName, lastName },
  } = user;

  return (
    <>
      <IconButton
        aria-controls={open ? "profile-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MuiAvatar
          id="profile-avatar"
          sx={{ ...sx, bgcolor: deepPurple[500] }}
        >{`${firstName[0]}${lastName[0]}`}</MuiAvatar>
      </IconButton>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default Avatar;
