import { useUser } from "../../../contexts/UserContext";
import AdminUserEntryPage from "../entry-page/AdminUserEntryPage";
import ExpertUserEntryPage from "../expert-pages/ExpertUserEntryPage";
import GuestEntryPage from "../entry-page/GuestEntryPage";
import RegularUserEntryPage from "../regular-user-pages/RegularUserEntryPage";
import { useEffect } from "react";

const EntryPage = () => {
  const { user, getUserData } = useUser();

  useEffect(() => {
    getUserData();
  }, []);

  if (user) {
    if (user.isExpert === true) return <ExpertUserEntryPage />;
    if (user.isAdmin === true) return <AdminUserEntryPage />;
    if (user.isExpert === false) return <RegularUserEntryPage />;
  }
  return <GuestEntryPage />;
};

export default EntryPage;
