import { Footer, Button, RegistrationForm, LoginFormModal } from "../../components";
import Google from "../../assets/icons/google.svg?react";
import { Stack } from "@mui/material";
import {
  AccountSpan,
  Container,
  ContentStack,
  IconBox,
  LinesSpan,
  Text,
  Title,
  TwitterX,
} from "./styleSX";
import { useEffect, useState } from "react";
import { googleRegister } from "@/redux/slices/userSlice";
import { useDispatch } from "react-redux";

export const Registration = () => {
  const dispatch = useDispatch();
  const [showRegModal, setShowRegModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleGoogleButtonClick = () => {
    window.location.href =
      "https://danit-final-twitter-8f32e99a3dec.herokuapp.com/oauth2/authorization/google?redirect_uri=http://localhost:5173/login";
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const state = urlParams.get("state");

    if (code && state) {
      dispatch(googleRegister(code, state));
    }
  }, [dispatch]);

  return (
    <Stack sx={{ height: "100vh", padding: "16px" }}>
      <Container direction="row">
        <IconBox>
          <TwitterX />
        </IconBox>
        <ContentStack>
          <Title variant="span">Happening now</Title>
          <Text variant="span">Join today.</Text>
          <Button startIcon={<Google />} onClick={handleGoogleButtonClick}>
            Sign up with Google
          </Button>
          <LinesSpan variant="span">or</LinesSpan>
          <Button
            onClick={() => setShowRegModal(true)}
            sx={{
              color: "white",
              backgroundColor: "#1d9bf0",
              "&:hover": { backgroundColor: "#1a8cd8" },
            }}>
            Create a profile
          </Button>
          <AccountSpan variant="span">Already have an account?</AccountSpan>
          <Button
            onClick={() => setShowLoginModal(true)}
            sx={{
              margin: "0 0 8px",
              color: "#1d9bf0",
            }}>
            Sign in
          </Button>
        </ContentStack>
      </Container>
      <Footer />

      {showRegModal && (
        <RegistrationForm
          handleRegModalClose={() => {
            setShowRegModal(false);
          }}
          handleRegModalOpen={showRegModal}
        />
      )}
      {showLoginModal && (
        <LoginFormModal
          handleLoginModalClose={() => setShowLoginModal(false)}
          handleLoginModalOpen={showLoginModal}
        />
      )}
    </Stack>
  );
};
