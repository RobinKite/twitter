import TabPanel from "@mui/lab/TabPanel";
import { Link } from "react-router-dom";
import { Typography, Container } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserPhoto, ProfileTabs, ItemPost, FollowButton } from "@/components";
import { useLoadPost } from "@/hooks/useLoadPost";
import { ArrowBack } from "@/icons";
import {
  ArrowSvg,
  ContainerHederText,
  ContainerUserInfo,
  HeaderPage,
} from "../Profile/styledSX";
import { Container as AppContainer } from "@/components";
import { useParams } from "react-router-dom";
import { getCurrentPosts, getCurrentUser } from "@/redux/slices/currentUser";
// import PropTypes from "prop-types";

const tabs = [
  { label: "Post", value: "0" },
  // { label: "Replies", value: "1" },
  // { label: "Likes", value: "2" },
];

export function CurrentUser() {
  const { id } = useParams();
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const user = useSelector((state) => state.currentUser.user);
  const posts = useSelector((state) => state.currentUser.currentPosts);
  console.log(user);
  const dispatch = useDispatch();

  const formattedBirthdate = user?.birthdate
    ? new Date(Number(user?.birthdate) * 1000).toLocaleDateString()
    : "N/A";

  useLoadPost();

  useEffect(() => {
    dispatch(getCurrentUser(id));
    dispatch(getCurrentPosts(id));
  }, [dispatch, id]);

  return (
    <>
      {/* <ModalEdit isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
      <AppContainer>
        <Container
          maxWidth="sm"
          disableGutters={true}
          sx={{ border: "1px solid rgb(239, 243, 244)" }}>
          <HeaderPage>
            <Link to="/profile">
              <ArrowSvg>
                <ArrowBack size={25} />
              </ArrowSvg>
            </Link>
            <ContainerHederText>
              <Typography variant="h6">{user?.fullName}</Typography>

              {/* <button onClick={() => dispatch(PostAuthorizationAsync(formData))}>
              test
            </button>
            <button onClick={() => dispatch(getUserAsync())}>test2</button> */}
            </ContainerHederText>
          </HeaderPage>
          <UserPhoto
            changeIcon={false}
            avatarUrl={user?.avatarUrl}
            imageUrl={user?.imageUrl}
          />
          <ContainerUserInfo>
            <FollowButton
              id={user?.id}
              userName={user?.userTag ? user?.userTag : user?.fullName}
              isFollowedByUser={user?.isFollowedByUser}
            />
            <Typography variant="h6">{user?.fullName}</Typography>
            <Typography variant="body1">{user?.userTag}</Typography>
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
              {user?.following} Following
            </Typography>
            <Typography
              component="span"
              variant="body1"
              sx={{
                paddingLeft: "10px",
              }}>
              {user?.followers} Followers
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
            <TabPanel value="0" sx={{ padding: 0 }}>
              {posts.map((post) => (
                <ItemPost
                  key={post.id}
                  postUser={post.user}
                  avatarUrl={post.user?.avatarUrl}
                  fullName={post.user?.fullName}
                  replyCount={post.replyCount}
                  id={post.id}
                  content={post.body}
                  likeCount={post.likeCount}
                  liked={post.liked}
                  imageUrls={post.imageUrls}
                />
              ))}
            </TabPanel>
            {/* <TabPanel value="1">Replies</TabPanel>
          <TabPanel value="2">
            
          </TabPanel> */}
          </ProfileTabs>
        </Container>
      </AppContainer>
    </>
  );
}
// CurrentUser.propTypes = {
// updateComment: PropTypes.func,
// fullName: PropTypes.string,
// };
