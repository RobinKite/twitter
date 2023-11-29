import TabPanel from "@mui/lab/TabPanel";
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
import { useParams } from "react-router-dom";
import {
  getCurrentLikedPosts,
  getCurrentPosts,
  getCurrentUser,
} from "@/redux/slices/currentUser";
import PropTypes from "prop-types";
const tabs = [
  { label: "Post", value: "0" },
  { label: "Replies", value: "1" },
  { label: "Likes", value: "2" },
];

export function CurrentUser() {
  const { id } = useParams();
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const user = useSelector((state) => state.currentUser.user);
  const posts = useSelector((state) => state.currentUser.currentPosts);
  const likedPosts = useSelector((state) => state.currentUser.currentLikedPosts);

  const dispatch = useDispatch();

  const formattedBirthdate =
    user && user.birthdate
      ? new Date(Number(user.birthdate) * 1000).toLocaleDateString()
      : "N/A";
  useLoadPost();

  useEffect(() => {
    dispatch(getCurrentUser(id));
    dispatch(getCurrentPosts(id));
    dispatch(getCurrentLikedPosts());
  }, [dispatch, id]);

  return (
    <>
      {/* <ModalEdit isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}

      <Container maxWidth="sm" disableGutters={true}>
        <HeaderPage>
          <ArrowSvg>
            <ArrowBack size={25} />
          </ArrowSvg>
          <ContainerHederText>
            <div>{user && user.fullName}</div>
            <Typography variant="h6"></Typography>

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
          <FollowButton
            id={user.id}
            userName={user.userTag ? user.userTag : user.fullName}
            isFollowedByUser={user.isFollowedByUser}
          />
          <Typography variant="h6">
            {/* TODO: change to user object */}
            {user && user.fullName}
          </Typography>
          <Typography variant="body1">
            {user && user.userTag}
            {/* TODO: change to user object@goflex175802 */}
          </Typography>
          <Typography
            component="div"
            variant="body1"
            sx={{
              padding: "10px 0",
            }}>
            some bio
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
            {posts.map((post) => (
              <ItemPost
                key={post.id}
                avatarUrl={post.user.avatarUrl}
                fullName={post.user.fullName}
                replyCount={post.replyCount}
                id={post.id}
                content={post.body}
                likeCount={post.likeCount}
                liked={post.liked}
                imageUrls={post.imageUrls}
              />
            ))}
          </TabPanel>
          <TabPanel value="1">Replies</TabPanel>
          <TabPanel value="2">
            {
              likedPosts.length
                ? likedPosts.map((post) => (
                    <ItemPost
                      avatarUrl={post.user.avatarUrl}
                      fullName={post.user.fullName}
                      key={post.id}
                      content={post.body}
                      imageUrls={post.imageUrls}
                      id={post.id}
                      likeCount={post.likeCount}
                      liked={post.liked}
                      replyCount={post.replyCount}
                    />
                  ))
                : `${user.fullName} don’t have any likes yet`
              // <NotificationTabContent
              //   title={`${user.fullName} don’t have any likes yet`}
              //   text="Tap the heart on any post to show it some love. When you do, it’ll show up here."
              // />
            }
          </TabPanel>
        </ProfileTabs>
      </Container>
    </>
  );
}
CurrentUser.propTypes = {
  // updateComment: PropTypes.func,
  fullName: PropTypes.string,
};
