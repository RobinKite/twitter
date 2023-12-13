import TabPanel from "@mui/lab/TabPanel";
import { Link } from "react-router-dom";
import { Typography, Container } from "@mui/material";
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
const tabs = [
  { label: "Post", value: "0" },
  // { label: "Replies", value: "1" },
  { label: "Likes", value: "2" },
];

export function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const user = useSelector((state) => state.user.user);
  const likedPosts = useSelector((state) => state.user.likedPosts);
  const posts = useSelector((state) => state.posts.myPosts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLikedPosts());
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
        sx={{
          border: "1px solid ",
          borderColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.dark.light_grey
              : theme.palette.dark.background_dark,
          height: "unset",
        }}>
        <HeaderPage>
          <Link to="/">
            <ArrowSvg
              sx={{
                fill: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.light.primary
                    : theme.palette.dark.secondary,
              }}>
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
          <Typography
            variant="h6"
            sx={{
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.common.secondary
                  : theme.palette.dark.light_grey,
            }}>
            {user && user.fullName}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.common.primary
                  : theme.palette.dark.text_grey,
            }}>
            {user && user.userTag}
          </Typography>
          <Typography
            component="div"
            variant="body1"
            sx={{
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.common.secondary
                  : theme.palette.dark.light_grey,
              padding: "10px 0",
            }}>
            {user && user.bio}
          </Typography>
          <Typography variant="body2">{formattedBirthdate}</Typography>

          <Typography component="span" variant="body1">
            {user && user.following} Following
          </Typography>
          <Typography
            component="span"
            variant="body1"
            sx={{
              paddingLeft: "10px",
            }}>
            {user && user.followers} Followers
          </Typography>
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
          <TabPanel sx={{ padding: 0 }} value="0">
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
            {
              likedPosts.length ? (
                likedPosts.map((post) => (
                  <ItemPost
                    postUser={post.user}
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
