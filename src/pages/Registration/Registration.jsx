import { useDispatch } from "react-redux";
import { Footer, Button } from "../../components";
import { setCreateProfileModal, setModal } from "../../redux/slices/appSlice";
import Google from "../../assets/icons/google.svg?react";
import { Stack } from "@mui/material";
import {
  AskingSpan,
  Container,
  ContentStack,
  IconBox,
  MainSpan,
  OrSpan,
  TextSpan,
  TwitterX,
} from "./StyledElements";

export const Registration = ({ setIsLog, isLog }) => {
  const dispatch = useDispatch();
  const toggleModal = () => {
    dispatch(setModal());
  };

  const handleCreateElementClick = () => {
    dispatch(setCreateProfileModal());
  };

  return (
    <Stack sx={{ height: "100vh", padding: "16px" }}>
      <Container direction="row">
        <IconBox>
          <TwitterX />
        </IconBox>
        <ContentStack>
          <MainSpan variant="span">Happening now</MainSpan>
          <TextSpan variant="span">Join today.</TextSpan>
          <Button startIcon={<Google />}>Sign up with Google</Button>
          <OrSpan variant="span">or</OrSpan>
          <Button
            onClick={handleCreateElementClick}
            sx={{
              color: "white",
              backgroundColor: "#1d9bf0",
              "&:hover": { backgroundColor: "#1a8cd8" },
            }}>
            Create a profile
          </Button>
          <AskingSpan variant="span">Already have an account?</AskingSpan>
          <Button
            onClick={toggleModal}
            sx={{
              margin: "0 0 8px",
              color: "#1d9bf0",
            }}>
            Sign in
          </Button>
        </ContentStack>
      </Container>
      <Footer />
      {/* {firstModalOpen && <LoginForm open={firstModalOpen} />} */}
    </Stack>
  );
};
