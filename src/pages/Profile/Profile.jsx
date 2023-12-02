import TabPanel from "@mui/lab/TabPanel";
// import { Link } from "react-router-dom";
import { Typography, Container } from "@mui/material";
import Link from "@mui/material/Link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserPhoto, ProfileTabs, ItemPost, ModalEdit } from "@/components";
import { useLoadPost } from "@/hooks/useLoadPost";
import { ArrowBack } from "@/icons";
import {
  ArrowSvg,
  ContainerHederText,
  ContainerUserInfo,
  EditButton,
  HeaderPage,
} from "./styledSX";
import {
  // UserPhoto,
  // ProfileTabs,
  // ItemPost,
  // ModalEdit,
  Container as AppContainer,
} from "@/components";
import { getLikedPosts, getUserInfo } from "@/redux/slices/userSlice";
import { getMyPosts } from "@/redux/slices/postsSlice";
import { setContent, setModalPost } from "@/redux/slices/appSlice";
import Following from "@/components/Following/Following";
import Followers from "@/components/Followers/Followers";
const tabs = [
  { label: "Post", value: "0" },
  // { label: "Replies", value: "1" },
  { label: "Likes", value: "2" },
];

export function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const isActiveModal = useSelector((state) => state.app.isPostModalActive);
  const user = useSelector((state) => state.user.user);

  const likedPosts = useSelector((state) => state.user.likedPosts);
  const posts = useSelector((state) => state.posts.myPosts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLikedPosts());
    dispatch(getUserInfo());
    dispatch(getMyPosts());
  }, [dispatch]);

  const formattedBirthdate =
    user && user.birthdate
      ? new Date(Number(user.birthdate) * 1000).toLocaleDateString()
      : "N/A";
  useLoadPost();

  return (
    <AppContainer>
      <ModalEdit isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <Container
        maxWidth="sm"
        disableGutters={true}
        sx={{ border: "1px solid rgb(239, 243, 244)", height: "unset" }}>
        <HeaderPage>
          <Link to="/">
            <ArrowSvg>
              <ArrowBack size={25} />
            </ArrowSvg>
          </Link>
          <ContainerHederText>
            <Typography variant="h6">{user && user.fullName}</Typography>
            {/* <div>post</div> */}
            {/* <button onClick={() => dispatch(PostAuthorizationAsync(formData))}>
              test
            </button>
            <button onClick={() => dispatch(getUserAsync())}>test2</button> */}
          </ContainerHederText>
        </HeaderPage>
        <UserPhoto
          changeIcon={false}
          avatarUrl={user && user.avatarUrl}
          imageUrl={user && user.imageUrl}
        />
        <ContainerUserInfo>
          <EditButton onClick={() => setIsModalOpen(true)} variant="outlined">
            Edit profile
          </EditButton>
          <Typography variant="h6"> {user && user.fullName}</Typography>
          <Typography variant="body1">{user && user.userTag}</Typography>
          <Typography
            component="div"
            variant="body1"
            sx={{
              padding: "10px 0",
            }}>
            {user && user.bio}
          </Typography>
          <Typography variant="body2">{formattedBirthdate}</Typography>
          <Link
            color={"rgb(83, 100, 113)"}
            underline="hover"
            onClick={() => {
              dispatch(setModalPost(true));
              dispatch(setContent(<Following />));
            }}>
            {user && user.following} Following
          </Link>

          <Link
            onClick={() => {
              dispatch(setModalPost(true));
              dispatch(setContent(<Followers />));
            }}
            color={"rgb(83, 100, 113)"}
            underline="hover"
            sx={{
              paddingLeft: "10px",
            }}>
            {user && user.followers} Followers
          </Link>
        </ContainerUserInfo>
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
            {posts.map((post) => (
              <ItemPost
                key={post.id}
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
            {
              likedPosts.length ? (
                likedPosts.map((post) => (
                  <ItemPost
                    avatarUrl={user.avatarUrl}
                    fullName={user.fullName}
                    key={post.id}
                    content={post.body}
                    imageUrls={post.imageUrls}
                    id={post.id}
                    likeCount={post.likeCount}
                    liked={post.liked}
                    replyCount={post.replyCount}
                  />
                ))
              ) : (
                <>You don&apos;t have any likes yet</>
              )
              // <NotificationTabContent
              //   title={'You do not have any likes yet'}
              //   text="Tap the heart on any post to show it some love. When you do, it’ll show up here."
              // />
            }
          </TabPanel>
        </ProfileTabs>
      </Container>
    </AppContainer>
  );
}
