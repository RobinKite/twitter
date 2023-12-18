import TabPanel from "@mui/lab/TabPanel";
import { Container } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProfileTabs } from "@/components";
import { Container as AppContainer } from "@/components";
import { useParams } from "react-router-dom";
import { getCurrentPosts, getCurrentUser, resetPosts } from "@/redux/slices/currentUser";
import ProfileUser from "@/components/ProfileUser/ProfileUser";
import InfiniteScroll from "react-infinite-scroll-component";
import LikedPosts from "@/components/LikedPosts/LikedPosts";
import RenderPosts from "@/components/RenderPosts/RenderPosts";
// import useLikedPosts from "@/hooks/useLikedPosts";
import { getCurrentLikedPosts } from "@/redux/slices/currentUser";
const tabs = [
  { label: "Post", value: "0" },
  // { label: "Replies", value: "1" },
  { label: "Likes", value: "2" },
];

export function CurrentUser() {
  const { id } = useParams();

  const user = useSelector((state) => state.currentUser.user);
  const posts = useSelector((state) => state.currentUser.currentPosts);
  const likedPosts = useSelector((state) => state.currentUser.currentLikedPosts);
  const hasMore = useSelector((state) => state.currentUser.hasMore);
  const page = useSelector((state) => state.currentUser.pageCurrent);
  const dispatch = useDispatch();

  const fetchPostsLiked = () => {
    if (hasMore) {
      dispatch(getCurrentLikedPosts(id, page + 1));
    }
  };

  const fetchPosts = () => {
    if (hasMore) {
      dispatch(getCurrentPosts(id, page + 1));
    }
  };

  useEffect(() => {
    dispatch(resetPosts());
    dispatch(getCurrentUser(id));
    dispatch(getCurrentPosts(id));
  }, [dispatch, id]);

  return (
    <>
      <AppContainer>
        <Container
          maxWidth="sm"
          disableGutters={true}
          sx={{ border: "1px solid rgb(239, 243, 244)" }}>
          {user && (
            <ProfileUser
              id={user.id}
              key={user.id}
              fullName={user.fullName}
              avatarUrl={user.avatarUrl}
              imageUrl={user.imageUrl}
              userTag={user.userTag}
              bio={user.bio}
              birthdate={user.birthdate}
              following={user.following}
              followers={user.followers}
              isFollowedByUser={user.isFollowedByUser}
              showFollowButton={true}
              location={user.location}
              createdAt={user.createdAt}
            />
          )}

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
              <InfiniteScroll dataLength={posts.length} next={fetchPosts} hasMore={true}>
                <RenderPosts id={id} statePost={true} />
              </InfiniteScroll>
            </TabPanel>
            {/* <TabPanel value="1">Replies</TabPanel> */}
            <TabPanel value="2" sx={{ padding: 0 }}>
              <InfiniteScroll
                dataLength={likedPosts.length}
                next={fetchPostsLiked}
                hasMore={true}>
                <LikedPosts id={id} currentUser={true} />
              </InfiniteScroll>
            </TabPanel>
          </ProfileTabs>
        </Container>
      </AppContainer>
    </>
  );
}
