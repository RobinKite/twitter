import TabPanel from "@mui/lab/TabPanel";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProfileTabs, ModalEdit } from "@/components";
import { Container as AppContainer } from "@/components";
import { getLikedPosts, getUserInfo, resetPostsLiked } from "@/redux/slices/userSlice";
import { getMyPosts, resetPosts } from "@/redux/slices/postsSlice";
import ProfileUser from "@/components/ProfileUser/ProfileUser";
import InfiniteScroll from "react-infinite-scroll-component";
import LikedPosts from "@/components/LikedPosts/LikedPosts";
import RenderPosts from "@/components/RenderPosts/RenderPosts";
import useInfinstyScroll from "@/hooks/useInfinstyScroll";

const tabs = [
  { label: "Post", value: "0" },
  // { label: "Replies", value: "1" },
  { label: "Likes", value: "2" },
];

export function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useSelector((state) => state.user.user);
  const posts = useSelector((state) => state.posts.myPosts);
  const dispatch = useDispatch();
  const likedPosts = useSelector((state) => state.user.likedPosts);

  useEffect(() => {
    dispatch(resetPosts());
    dispatch(resetPostsLiked());
    dispatch(getUserInfo());
  }, [dispatch]);

  return (
    <AppContainer>
      <ModalEdit
        isOpen={isModalOpen}
        fullName={user.fullName}
        userTag={user.userTag}
        location={user.location}
        bio={user.bio}
        onClose={() => setIsModalOpen(false)}
      />
      <Container
        maxWidth="sm"
        disableGutters={true}
        sx={{ border: "1px solid rgb(239, 243, 244)", height: "unset" }}>
        {user && (
          <ProfileUser
            id={user.id}
            key={user.id}
            fullName={user.fullName}
            avatarUrl={user.avatarUrl}
            imageUrl={user.imageUrl}
            userTag={user.userTag}
            bio={user.bio}
            setIsModalOpen={setIsModalOpen}
            birthdate={user.birthdate}
            following={user.following}
            followers={user.followers}
            showFollowButton={false}
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
            <InfiniteScroll
              dataLength={posts.length}
              next={useInfinstyScroll({ callback: getMyPosts, slice: "posts" })}
              hasMore={true}>
              <RenderPosts statePost={false} />
            </InfiniteScroll>
          </TabPanel>

          {/* <TabPanel value="1">Replies</TabPanel> */}

          <TabPanel value="2">
            <InfiniteScroll
              dataLength={likedPosts.length}
              next={useInfinstyScroll({ callback: getLikedPosts, slice: "user" })}
              hasMore={true}>
              <LikedPosts currentUser={false} />
            </InfiniteScroll>
          </TabPanel>
        </ProfileTabs>
      </Container>
    </AppContainer>
  );
}
