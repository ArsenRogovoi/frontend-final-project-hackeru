// import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MobileMenu from "./pageHeaderComponents/MobileMenu";
import PageIndication from "./pageHeaderComponents/PageIndication";
import DesktopNavBar from "./pageHeaderComponents/DesktopNavBar";

const PageHeader = () => {
  const navLinks = ["Home", "About", "Contacts"];

  return (
    <AppBar position="static">
      <Toolbar>
        <MobileMenu />
        <PageIndication />
        <DesktopNavBar pages={navLinks} />
      </Toolbar>
    </AppBar>
  );
};

export default PageHeader;
