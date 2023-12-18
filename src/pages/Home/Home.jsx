// import { useLoadPost } from "@/hooks/useLoadPost";
import { Stack, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Container, CreatePost, WelcomeMessage } from "@/components";
import { homeHeaderSX } from "./stylesSX";
import { getPosts } from "@/redux/slices/postsSlice";
import { useEffect } from "react";
import HomePostsContainer from "@/components/HomePostsContainer/HomePostsContainer";

export const Home = () => {
  const accountUser = useSelector((state) => state.user.user);

  // const avatarUrl = posts.length > 0 ? posts[0].user.avatarUrl : null;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  console.log(accountUser);

  return (
    <Container>
      <div style={{ border: "1px solid rgb(239, 243, 244)" }}>
        <Stack sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
          <Typography variant="h2" component="h2" sx={homeHeaderSX}>
            Following
          </Typography>
        </Stack>

        {!accountUser.following && (
          <WelcomeMessage
            stylesSX={{
              marginBottom: "15px",
              padding: "0 20px",
              fontWeight: 500,
              textAlign: "center",
            }}
          />
        )}
        <CreatePost avatarUrl={accountUser.avatarUrl} />
        <HomePostsContainer />
      </div>
    </Container>
  );
};
