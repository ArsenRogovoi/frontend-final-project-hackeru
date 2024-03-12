import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MobileMenu from "./pageHeaderComponents/MobileMenu";
import PageIndication from "./pageHeaderComponents/PageIndication";
import DesktopNavBar from "./pageHeaderComponents/DesktopNavBar";

const PageHeader = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <MobileMenu />
        <PageIndication />
        <DesktopNavBar />
      </Toolbar>
    </AppBar>
  );
};

export default PageHeader;
