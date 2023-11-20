import TabPanel from "@mui/lab/TabPanel";
import { ProfileTabs, AllNotifications } from "../../components";
import styles from "./Notifications.module.scss";

const tabs = [
  { label: "All", value: "1" },
  { label: "Verified", value: "2" },
  { label: "Mentions", value: "3" },
];

export const Notifications = () => {
  return (
    <div>
      <h2 className={styles.title}>Notifications</h2>
      <ProfileTabs
        tabs={tabs}
        variant="scrollable"
        scrollButtons="auto"
        style={{
          "& .MuiTabs-flexContainer": {
            justifyContent: "space-around",
          },
        }}>
        <TabPanel value="1">
          <AllNotifications />
        </TabPanel>
        <TabPanel value="2">Verified</TabPanel>
        <TabPanel value="3">Mentions</TabPanel>
      </ProfileTabs>
    </div>
  );
};
