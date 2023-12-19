import TabPanel from "@mui/lab/TabPanel";
import { Container } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProfileTabs, ItemPost, ProfileUser } from "@/components";
import { Container as AppContainer } from "@/components";
import { useParams } from "react-router-dom";
import {
  getCurrentLikedPosts,
  getCurrentPosts,
  getCurrentUser,
} from "@/redux/slices/currentUser";
import { resetPosts } from "@/redux/slices/postsSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import useInfinstyScroll from "@/hooks/useInfinstyScroll";
import { sortByCreatedAt } from "@/utils";

const tabs = [
  { label: "Post", value: "0" },
  // { label: "Replies", value: "1" },
  { label: "Likes", value: "2" },
];

export function CurrentUser() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.currentUser.currentPosts);
  const likedPosts = useSelector((state) => state.currentUser.currentLikedPosts);

  useEffect(() => {
    dispatch(resetPosts());
    dispatch(getCurrentUser(id));
    dispatch(getCurrentPosts(null, id));
    dispatch(getCurrentLikedPosts(null, id));
  }, [dispatch, id]);

  return (
    <>
      <AppContainer>
        <Container
          maxWidth="sm"
          disableGutters={true}
          sx={{ border: "1px solid rgb(239, 243, 244)" }}>
          <ProfileUser isSelf={false} />
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
                dataLength={posts.length}
                next={useInfinstyScroll({
                  callback: getCurrentPosts,
                  slice: "currentUser",
                  id: id,
                })}
                hasMore={true}>
                {sortByCreatedAt(posts).map((post) => (
                  <ItemPost key={post.id} post={post} />
                ))}
              </InfiniteScroll>
            </TabPanel>
            {/* <TabPanel value="1">Replies</TabPanel> */}
            <TabPanel value="2" sx={{ padding: 0 }}>
              <InfiniteScroll
                dataLength={likedPosts.length}
                next={useInfinstyScroll({
                  callback: getCurrentLikedPosts,
                  slice: "currentUser",
                  id: id,
                })}
                hasMore={true}>
                {sortByCreatedAt(likedPosts)?.map((post) => (
                  <ItemPost key={post.id} post={post} />
                ))}
              </InfiniteScroll>
            </TabPanel>
          </ProfileTabs>
        </Container>
      </AppContainer>
    </>
  );
}
