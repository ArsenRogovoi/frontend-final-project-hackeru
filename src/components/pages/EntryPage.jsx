import { useUser } from "../../contexts/UserContext";
import GuestEntryPage from "./entry-page/GuestEntryPage";
import UserEntryPage from "./entry-page/UserEntryPage";

const EntryPage = () => {
  const { user } = useUser();

  if (user) {
    return <UserEntryPage />;
  } else {
    return <GuestEntryPage />;
  }
};

export default EntryPage;
