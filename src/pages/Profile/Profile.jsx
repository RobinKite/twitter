import TabPanel from "@mui/lab/TabPanel";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProfileTabs, ItemPost, ModalEdit } from "@/components";
import { Container as AppContainer } from "@/components";
import { getUserInfo } from "@/redux/slices/userSlice";
import { getMyPosts } from "@/redux/slices/postsSlice";
import ProfileUser from "@/components/ProfileUser/ProfileUser";
import LikedPosts from "@/components/LikedPosts/LikedPosts";

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
  useEffect(() => {
    dispatch(getUserInfo());
    dispatch(getMyPosts());
  }, [dispatch]);

  useEffect(() => {
    const unlisten = () => {
      window.scrollTo(0, 0);
    };

    return () => {
      unlisten();
    };
  }, []);

  // useLoadPost();

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
            {posts.map((post) => (
              <ItemPost
                key={post.id}
                postUser={post.user}
                avatarUrl={user.avatarUrl}
                fullName={user.fullName}
                replyCount={post.replyCount}
                id={post.id}
                content={post.body}
                likeCount={post.likeCount}
                liked={post.liked}
                imageUrls={post.imageUrls}
              />
            ))}
          </TabPanel>

          {/* <TabPanel value="1">Replies</TabPanel> */}
          <TabPanel value="2">
            <LikedPosts currentUser={false} />
          </TabPanel>
        </ProfileTabs>
      </Container>
    </AppContainer>
  );
}
