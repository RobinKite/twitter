import TabPanel from "@mui/lab/TabPanel";
import { Typography, Container } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  UserPhoto,
  ProfileTabs,
  ItemPost,
  ModalEdit,
  Container as AppContainer,
} from "@/components";
import { useLoadPost } from "@/hooks/useLoadPost";
import { ArrowBack } from "@/icons";
import {
  ArrowSvg,
  ContainerHederText,
  ContainerUserInfo,
  EditButton,
  HeaderPage,
} from "./styledSX";

const tabs = [
  { label: "Post", value: "0" },
  { label: "Replies", value: "1" },
  { label: "Likes", value: "2" },
];

export function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const posts = useSelector((state) => state.posts.posts);

  useLoadPost();

  return (
    <AppContainer>
      <ModalEdit isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <Container maxWidth="sm" disableGutters={true}>
        <HeaderPage>
          <ArrowSvg>
            <ArrowBack size={25} />
          </ArrowSvg>
          <ContainerHederText>
            <Typography variant="h6">
              {/* TODO: change to user object */}go flex
            </Typography>
            <div>post</div>
            {/* <button onClick={() => dispatch(PostAuthorizationAsync(formData))}>
              test
            </button>
            <button onClick={() => dispatch(getUserAsync())}>test2</button> */}
          </ContainerHederText>
        </HeaderPage>
        <UserPhoto changeIcon={false} />
        <ContainerUserInfo>
          <EditButton onClick={() => setIsModalOpen(true)} variant="outlined">
            Edit profile
          </EditButton>
          <Typography variant="h6">{/* TODO: change to user object */}go flex</Typography>
          <Typography variant="body1">
            {/* TODO: change to user object */}@goflex175802
          </Typography>
          <Typography
            component="div"
            variant="body1"
            sx={{
              padding: "10px 0",
            }}>
            some bio
          </Typography>
          <Typography variant="body2">
            Joined {/* TODO: change to user object */}September 2023
          </Typography>

          <Typography component="span" variant="body1">
            {/* TODO: change to user object */}1 Following
          </Typography>
          <Typography
            component="span"
            variant="body1"
            sx={{
              paddingLeft: "10px",
            }}>
            {/* TODO: change to user object */}0 Followers
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
          <TabPanel value="0">
            {posts.map((p) => (
              <ItemPost
                key={p.id}
                avatarUrl={p.user.avatarUrl}
                fullName={p.user.fullName}
                replyCount={p.replyCount}
                id={p.id}
                content={p.body}
                likeCount={p.likeCount}
                liked={p.liked}
                imageUrls={p.imageUrls}
              />
            ))}
          </TabPanel>
          <TabPanel value="1">Replies</TabPanel>
          <TabPanel value="2">Likes</TabPanel>
        </ProfileTabs>
      </Container>
    </AppContainer>
  );
}
