import TabPanel from "@mui/lab/TabPanel";
import { styled, Typography, Container, Button, Box } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { UserPhoto, ProfileTabs, ItemPost, ModalEdit } from "@/components";
import { useLoadPost } from "@/hooks/useLoadPost";
import { ArrowBack } from "@/icons";

const tabs = [
  { label: "Post", value: "0" },
  { label: "Replies", value: "1" },
  { label: "Likes", value: "2" },
];

const HeaderPage = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  padding: "10px 0 5px 20px",
}));

const ContainerUserInfo = styled(Box)(() => ({
  padding: "60px 0 25px 20px",
  position: "relative",
}));

const ArrowSvg = styled(Box)(() => ({
  backgroundColor: "white",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "40px",
  height: "40px",
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: "rgb(133, 125, 125)",
  },
}));

const ContainerHederText = styled(Box)(() => ({
  paddingLeft: "20px",
  color: "black",
}));

const EditButton = styled(Button)(() => ({
  position: "absolute",
  borderRadius: "50px",
  right: "20px",
  top: "20px",
  border: "1px solid rgb(239, 243, 244)",
  color: "black",
  " &:hover": {
    border: "1px solid rgb(207, 217, 222)",
    background: " rgb(239, 243, 244)",
  },
}));

export function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const posts = useSelector((state) => state.posts.posts);

  useLoadPost();

  return (
    <>
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
    </>
  );
}
