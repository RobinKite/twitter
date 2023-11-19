import classNames from "classnames";
import styles from "./Notifications.module.scss";
import LabTabs from "../../Components/ProfileTabs";
import TabPanel from "@mui/lab/TabPanel";
import AllNotifications from "../../Components/AllNotifications/AllNotifications";

const tabs = [
  { label: "All", value: "1" },
  { label: "Verified", value: "2" },
  { label: "Mentions", value: "3" },
];

const Notifications = () => {
  return (
    <div className={classNames()}>
      <h2 className={classNames(styles.title)}>Notifications</h2>
      <LabTabs
        tabs={tabs}
        variant="scrollable"
        scrollButtons="auto"
        style={{
          "& .MuiTabs-flexContainer": {
            justifyContent: "space-around",
          },
        }}
      >
        <TabPanel value="1">
          <AllNotifications />
        </TabPanel>
        <TabPanel value="2">Verified</TabPanel>
        <TabPanel value="3">Mentions</TabPanel>
      </LabTabs>
    </div>
  );
};

export default Notifications;
