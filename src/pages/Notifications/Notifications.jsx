import TabPanel from "@mui/lab/TabPanel";
import { Stack, Typography } from "@mui/material";
import { NotificationTabContent, Container, ProfileTabs } from "@/components";
import imageVerification from "@/assets/images/verification.png";
import { title } from "./styleSX";
import NotificationsList from "@/components/NotificationsList/NotificationsList";
import RepliesList from "@/components/RepliesList/RepliesList";

const tabs = [
  { label: "All", value: "0" },
  // { label: "Verified", value: "1" },
  { label: "Mentions", value: "2" },
];

export const Notifications = () => {
  return (
    <Container>
      <Stack
        sx={{ border: "1px solid rgb(239, 243, 244)", height: "unset", flexGrow: 1 }}>
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
            <NotificationsList />
          </TabPanel>
          {/* <TabPanel value="1" sx={{ padding: 0 }}>
            <NotificationTabContent
              title="Nothing to see here — yet"
              imageUrl={imageVerification}
              text="Likes, mentions, reposts, and a whole lot more — when it comes from a verified account, you&#39;ll find it here."
            />
          </TabPanel> */}
          <TabPanel value="2" sx={{ padding: 0 }}>
            <RepliesList />
          </TabPanel>
        </ProfileTabs>
      </Stack>
    </Container>
  );
};
