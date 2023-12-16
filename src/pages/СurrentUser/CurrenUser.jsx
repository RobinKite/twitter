import TabPanel from "@mui/lab/TabPanel";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProfileTabs, ItemPost } from "@/components";
import { Container as AppContainer } from "@/components";
import { useParams } from "react-router-dom";
import {
  getCurrentLikedPosts,
  getCurrentPosts,
  getCurrentUser,
  resetPosts,
} from "@/redux/slices/currentUser";
import ProfileUser from "@/components/ProfileUser/ProfileUser";

import InfiniteScroll from "react-infinite-scroll-component";
// import usefetchPosts from "@/components/RenderPost/RenderPost";

const tabs = [
  { label: "Post", value: "0" },
  // { label: "Replies", value: "1" },
  { label: "Likes", value: "2" },
];

export function CurrentUser() {
  const { id } = useParams();

  const user = useSelector((state) => state.currentUser.user);
  console.log(user);
  const posts = useSelector((state) => state.currentUser.currentPosts);
  console.log(posts);
  const currentLikedPosts = useSelector((state) => state.currentUser.currentLikedPosts);
  const hasMore = useSelector((state) => state.currentUser.hasMore);
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();

  // const fetchPostsForUser = usefetchPosts(getCurrentPosts, id);
  useEffect(() => {
    dispatch(resetPosts());
    dispatch(getCurrentUser(id));
    dispatch(getCurrentPosts(id));
    dispatch(getCurrentLikedPosts(id));
  }, [dispatch, id]);

  useEffect(() => {
    setPage(0);
  }, [id, page]);
  const fetchPosts = () => {
    setPage((prevState) => {
      const nextPage = prevState + 1;

      if (hasMore) {
        dispatch(getCurrentPosts(id, nextPage));
      }

      return nextPage;
    });
  };

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
                {posts.map((post) => (
                  <ItemPost
                    key={post.id}
                    postUser={post.user}
                    avatarUrl={post.user?.avatarUrl}
                    fullName={post.user?.fullName}
                    replyCount={post.replyCount}
                    id={post.id}
                    content={post.body}
                    likeCount={post.likeCount}
                    liked={post.liked}
                    imageUrls={post.imageUrls}
                  />
                ))}
              </InfiniteScroll>
            </TabPanel>
            {/* <TabPanel value="1">Replies</TabPanel> */}
            <TabPanel value="2" sx={{ padding: 0 }}>
              {!!currentLikedPosts.length &&
                currentLikedPosts.map((post) => (
                  <ItemPost
                    avatarUrl={post.user.avatarUrl}
                    fullName={post.user.fullName}
                    key={post.id}
                    content={post.body}
                    imageUrls={post.imageUrls}
                    id={post.id}
                    likeCount={post.likeCount}
                    liked={post.liked}
                    replyCount={post.replyCount}
                  />
                ))}
            </TabPanel>
          </ProfileTabs>
        </Container>
      </AppContainer>
    </>
  );
}
