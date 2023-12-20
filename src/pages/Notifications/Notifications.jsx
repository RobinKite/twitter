import TabPanel from "@mui/lab/TabPanel";
import { Stack, Typography } from "@mui/material";
import { Container, ProfileTabs } from "@/components";
import { title } from "./styleSX";
import NotificationsList from "@/components/NotificationsList/NotificationsList";
import RepliesList from "@/components/RepliesList/RepliesList";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import { getNotifications } from "@/redux/slices/userSlice";
import useInfinityScroll from "@/hooks/useInfinityScroll";

const tabs = [
  { label: "All", value: "0" },
  { label: "Mentions", value: "2" },
];

export const Notifications = () => {
  const notifications = useSelector((state) => state.user.notifications);

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
            <InfiniteScroll
              dataLength={notifications.length}
              next={useInfinityScroll({ callback: getNotifications, slice: "user" })}
              hasMore={true}>
              <NotificationsList />
            </InfiniteScroll>
          </TabPanel>
          <TabPanel value="2" sx={{ padding: 0 }}>
            <RepliesList />
          </TabPanel>
        </ProfileTabs>
      </Stack>
    </Container>
  );
};
