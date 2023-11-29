import TabPanel from "@mui/lab/TabPanel";
import { ProfileTabs } from "../../components";
import { Stack, Typography } from "@mui/material";
import { title } from "./styleSX";
import { NotificationTabContent } from "@/components/NotificationTabContent/NotificationTabContent";

const tabs = [
  { label: "All", value: "0" },
  { label: "Verified", value: "1" },
  { label: "Mentions", value: "2" },
];

export const Notifications = () => {
  return (
    <Stack>
      <Typography variant="h2" sx={title}>
        Notifications
      </Typography>
      <ProfileTabs
        tabs={tabs}
        variant="scrollable"
        scrollButtons="auto"
        style={{
          "& .MuiTabs-flexContainer": {
            justifyContent: "space-around",
          },
        }}>
        <TabPanel value="0">
          {/* <AllNotifications /> */}
          <NotificationTabContent text="From likes to reposts and a whole lot more, this is where all the action happens." />
        </TabPanel>
        <TabPanel value="1">
          <NotificationTabContent
            imageUrl
            text="Likes, mentions, reposts, and a whole lot more — when it comes from a verified account, you’ll find it here."
          />
        </TabPanel>
        <TabPanel value="2">
          <NotificationTabContent text="When someone mentions you, you’ll find it here." />
        </TabPanel>
      </ProfileTabs>
    </Stack>
  );
};
