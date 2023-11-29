import TabPanel from "@mui/lab/TabPanel";
import { Link } from "react-router-dom";
import { Typography, Container } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
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
const tabs = [
  { label: "Post", value: "0" },
  { label: "Replies", value: "1" },
  { label: "Likes", value: "2" },
];

export function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const posts = useSelector((state) => state.posts.posts);
  const user = useSelector((state) => state.user.user);
  // console.log(user);
  const formattedBirthdate =
    user && user.birthdate
      ? new Date(Number(user.birthdate) * 1000).toLocaleDateString()
      : "N/A";
  useLoadPost();

  return (
    <>
      <ModalEdit isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <Container maxWidth="sm" disableGutters={true}>
        <HeaderPage>
          <Link to="/profile">
            <ArrowSvg>
              <ArrowBack size={25} />
            </ArrowSvg>
          </Link>
          <ContainerHederText>
            <Typography variant="h6">
              {/* TODO: change to user object */}
              {user && user.fullName}
            </Typography>
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
