import TabPanel from "@mui/lab/TabPanel";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProfileTabs, ItemPost, ModalEdit, ProfileUser } from "@/components";
import { Container as AppContainer } from "@/components";
import { getLikedPosts, fetchUser, resetPostsLiked } from "@/redux/slices/userSlice";
import { getMyPosts, resetPosts } from "@/redux/slices/postsSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import { PostType } from "@/constants";
// import RenderPosts from "@/components/RenderPosts/RenderPosts";
import useInfinstyScroll from "@/hooks/useInfinstyScroll";
// import LikedPosts from "@/components/LikedPosts/LikedPosts";
// import RenderPosts from "@/components/RenderPosts/RenderPosts";
import { sortByCreatedAt } from "@/utils";

const tabs = [
  { label: "Post", value: "0" },
  { label: "Replies", value: "1" },
  { label: "Likes", value: "2" },
];

export function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useSelector((state) => state.user.user);
  const posts = useSelector((state) => state.posts.myPosts);
  const repostPosts = posts.filter((post) => post.type === PostType.QUOTE);
  const likedPosts = useSelector((state) => state.user.likedPosts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetPosts());
    dispatch(resetPostsLiked());
    dispatch(fetchUser());
    dispatch(getMyPosts());
    dispatch(getLikedPosts());
  }, [dispatch]);

  useEffect(() => {
    const unlisten = () => {
      window.scrollTo(0, 0);
    };

    return () => {
      unlisten();
    };
  }, []);

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
        <ProfileUser setIsModalOpen={setIsModalOpen} isSelf={true} />
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
              {sortByCreatedAt(posts).map((post) => (
                <ItemPost key={post.id} post={post} />
              ))}
            </InfiniteScroll>
          </TabPanel>

          <TabPanel value="1" sx={{ padding: 0 }}>
            {repostPosts.length ? (
              repostPosts.map((post) => <ItemPost key={post.id} post={post} />)
            ) : (
              <>You don&apos;t have any reposts yet</>
            )}
          </TabPanel>
          <TabPanel value="2">
            <InfiniteScroll
              dataLength={likedPosts.length}
              next={useInfinstyScroll({ callback: getLikedPosts, slice: "user" })}
              hasMore={true}>
              {sortByCreatedAt(likedPosts).map((post) => (
                <ItemPost key={post.id} post={post} />
              ))}
              {/* <LikedPosts currentUser={false} /> */}
            </InfiniteScroll>
          </TabPanel>
        </ProfileTabs>
      </Container>
    </AppContainer>
  );
}
