import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MobileMenu from "./MobileMenu";
import DesktopNavBar from "./DesktopNavBar";

const PageHeader = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <MobileMenu />
        <DesktopNavBar />
      </Toolbar>
    </AppBar>
  );
};

export default PageHeader;
