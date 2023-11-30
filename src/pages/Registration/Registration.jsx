import { Footer, Button, LoginFormModal, RegistrationFormModal } from "@/components";
import { Google } from "@/icons";
import { Stack } from "@mui/material";
import {
  AccountSpanSX,
  ContainerSX,
  ContentStackSX,
  IconBoxSX,
  LinesSpanSX,
  TextSX,
  TitleSX,
  TwitterXSX,
} from "./styleSX";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { googleRegister } from "@/redux/slices/userSlice";

export const Registration = () => {
  const dispatch = useDispatch();
  const [showRegModal, setShowRegModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleGoogleButtonClick = () => {
    window.location.href =
      "https://danit-final-twitter-8f32e99a3dec.herokuapp.com/oauth2/authorization/google?redirect_uri=https://twitter-two-roan.vercel.app/login";
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
      <ContainerSX direction="row">
        <IconBoxSX>
          <TwitterXSX />
        </IconBoxSX>
        <ContentStackSX>
          <TitleSX variant="span">Happening now</TitleSX>
          <TextSX variant="span">Join today.</TextSX>
          <Button onClick={handleGoogleButtonClick} endIcon={<Google size={22} />}>
            Sign up with Google
          </Button>
          <LinesSpanSX variant="span">or</LinesSpanSX>
          <Button
            onClick={() => setShowRegModal(true)}
            sx={{
              color: "white",
              backgroundColor: "#1d9bf0",
              "&:hover": { backgroundColor: "#1a8cd8" },
            }}>
            Create a profile
          </Button>
          <AccountSpanSX variant="span">Already have an account?</AccountSpanSX>
          <Button
            onClick={() => setShowLoginModal(true)}
            sx={{
              margin: "0 0 8px",
              color: "#1d9bf0",
            }}>
            Sign in
          </Button>
        </ContentStackSX>
      </ContainerSX>
      <Footer />
      {showRegModal && (
        <RegistrationFormModal
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
