import { ReactComponent as ArrowBack } from "./svg/arrow.svg";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalEdit from "../../Components/ModalEdit";
import ItemPost from "../../Components/ItemPost/ItemPost";

import {
  Avatar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button,
  Modal,
  styled,
} from "@mui/material";
import LabTabs from "../../Components/ProfileTabs";
import TabPanel from "@mui/lab/TabPanel";
import UserFoto from "../../Components/UserFoto";

import { GetUserAsync } from "../../redux/actions/userInfo";
const tabs = [
  { label: "Post", value: "1" },
  { label: "Replies", value: "2" },
  { label: "Likes", value: "3" },
];

const HeaderPage = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "10px 0 5px 20px",
}));
const ContainerUserInfo = styled(Box)(({ theme }) => ({
  padding: "60px 0 25px 20px",
  position: "relative",
}));
const ArrowSvg = styled(Box)(({ theme }) => ({
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
const ContainerHederText = styled(Box)(({ theme }) => ({
  paddingLeft: "20px",
  color: "black",
}));
const EditButton = styled(Button)(({ theme }) => ({
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


const access_token =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMkBnbWFpbC5jb20iLCJpYXQiOjE2OTgwNDI5NTEsImV4cCI6MTY5ODA4NjE1MX0.91QCoZLAhSWLsyFf9HWGCbP5gqDJn7reA-p14877n8s";
const refresh_token =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMkBnbWFpbC5jb20iLCJpYXQiOjE2OTgwNDI5NTEsImV4cCI6MTY5ODY0Nzc1MX0.T7XZEerJNZYe6JNgQM5mR2itiaEB0jljfKWdx_vbpDY";

export default function Profile() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  // const token = useSelector((state) => state.authorization);
  // const userInfo = useSelector((state) => state.user.user);
  // const formData = {
  //   email: "user1@gmail.com",
  //   password: "1111",
  // };

  const addPost = () => {
    fetch("https://danit-final-twitter-8f32e99a3dec.herokuapp.com/posts/home", {
      method: "GET",

      headers: {
        Authorization: `Bearer ${refresh_token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.content);
      })
      .catch((error) => {
        console.error("Сталася помилка:", error);
      });
  };







  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalEdit onClose={handleClose} />
      </Modal>

      <Container maxWidth="sm" disableGutters={true}>
        <HeaderPage>
          <ArrowSvg>
            <ArrowBack />
          </ArrowSvg>
          <ContainerHederText>
            <Typography variant="h6">go flex</Typography>
            <div>post</div>
            {/* <button onClick={() => dispatch(PostAuthorizationAsync(formData))}>
              test
            </button>
            <button onClick={() => dispatch(GetUserAsync())}>test2</button> */}
          </ContainerHederText>
        </HeaderPage>
        <UserFoto changeIcon={false} />
        <ContainerUserInfo>
          <EditButton onClick={handleOpen} variant="outlined">
            Edit profile
          </EditButton>
          <Typography variant="h6">go flex</Typography>
          <Typography variant="body1">@goflex175802</Typography>
          <Typography
            component="div"
            variant="body1"
            sx={{
              padding: "10px 0",
            }}
          >
            {"some bio"}
          </Typography>
          <Typography variant="body2">Joined September 2023</Typography>

          <Typography component="span" variant="body1">
            1 Following
          </Typography>
          <Typography
            component="span"
            variant="body1"
            sx={{
              paddingLeft: "10px",
            }}
          >
            0 Followers
          </Typography>
        </ContainerUserInfo>
        <LabTabs
          tabs={tabs}
          variant="scrollable"
          scrollButtons="auto"
          style={{
            "& .MuiTabs-flexContainer": {
              justifyContent: "space-around",
            },
          }}
        >
          <TabPanel value="1"> <ItemPost /></TabPanel>
          <TabPanel value="2">Peplies</TabPanel>
          <TabPanel value="3">Likes</TabPanel>
        </LabTabs>
      </Container>
    </>
  );
}
