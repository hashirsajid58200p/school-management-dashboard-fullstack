import { currentUser } from "@/lib/auth";
import SettingsClientPage from "./SettingsClientPage";

const SettingsPage = async () => {
  const user = await currentUser();

  return <SettingsClientPage initialUser={user} />;
};

export default SettingsPage;
