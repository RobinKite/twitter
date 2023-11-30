import TabPanel from "@mui/lab/TabPanel";
import { NotificationTabContent, ProfileTabs } from "../../components";
import { Stack, Typography } from "@mui/material";
import { title } from "./styleSX";
import imageVerification from "../../assets/verification.png";

const tabs = [
  { label: "All", value: "0" },
  { label: "Verified", value: "1" },
  { label: "Mentions", value: "2" },
];

export const Notifications = () => {
  return (
    <Stack sx={{ border: "1px solid rgb(239, 243, 244)", height: "unset" }}>
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
        <TabPanel value="0" sx={{ padding: 0 }}>
          <NotificationTabContent
            title="Nothing to see here — yet"
            text="From likes to reposts and a whole lot more, this is where all the action happens."
          />
        </TabPanel>
        <TabPanel value="1" sx={{ padding: 0 }}>
          <NotificationTabContent
            title="Nothing to see here — yet"
            imageUrl={imageVerification}
            text="Likes, mentions, reposts, and a whole lot more — when it comes from a verified account, you&#39;ll find it here."
          />
        </TabPanel>
        <TabPanel value="2" sx={{ padding: 0 }}>
          <NotificationTabContent
            title="Nothing to see here — yet"
            text="When someone mentions you, you&#39;ll find it here."
          />
        </TabPanel>
      </ProfileTabs>
    </Stack>
  );
};
