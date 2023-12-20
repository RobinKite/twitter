import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { FollowButton, UserPhoto } from "@/components";
import PropTypes from "prop-types";
import { ArrowBack } from "@/icons";
import {
  ArrowSvg,
  ContainerHederText,
  ContainerUserInfo,
  EditButton,
  HeaderPage,
  BoxInfo,
  TypographyInfo,
} from "./styled.SX";
import { setContent, setModalPost } from "@/redux/slices/appSlice";
import { RecommendedUserCard } from "@/components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Location } from "@/icons/custom/Location";
import { Calendar } from "@/icons/custom/Calendar";
import { Birhdate } from "@/icons/custom/Birthdate";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import { getUserFollowers, getUserFollowing } from "@/redux/slices/userSlice";
import { formatTimestamp } from "@/utils/date";

const LinkedUsers = ({ type }) => {
  const currentUser = useSelector((state) => state.user.user);
  const fieldName = type === "followers" ? "usersFollowers" : "usersFollowing";
  const users = useSelector((state) => state.user[fieldName]);

  return (
    <>
      {users.map((user) => (
        <RecommendedUserCard
          key={user.id}
          id={user.id}
          fullName={user.fullName}
          userTag={user.userTag}
          avatarUrl={user.avatarUrl}
          useButton={user.id !== currentUser.id}
          isFollowedByUser={user.isFollowedByUser}
          isInModal={true}
        />
      ))}
    </>
  );
};

LinkedUsers.propTypes = {
  type: PropTypes.string.isRequired,
};

export function ProfileUser({ isSelf, setIsModalOpen }) {
  // const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getUserFromState = (state) => (isSelf ? state.user.user : state.currentUser.user);
  const user = useSelector(getUserFromState);
  if (!user) return null;
  const {
    id,
    fullName,
    avatarUrl,
    imageUrl,
    userTag,
    bio,
    birthdate,
    following,
    followers,
    createdAt,
    location,
    isFollowedByUser,
  } = user;
  const formattedBirthdate = formatTimestamp(birthdate);
  const registrationDate = formatTimestamp(createdAt);
  const handleLinkClick = (component, isFollowers) => {
    if ((isFollowers && followers === 0) || (!isFollowers && following === 0)) {
      return;
    }

    setLoading(true);
    const getUser = isFollowers ? getUserFollowers : getUserFollowing;
    return new Promise((resolve, reject) => {
      dispatch(getUser(id))
        .then(() => {
          dispatch(setModalPost(true));
          dispatch(setContent(component));
          resolve();
        })
        .catch((error) => {
          console.error("Error:", error);
          reject(error);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  };

  const redirectToPost = () => {
    navigate(`/`, { replace: true });
  };
  return (
    <>
      <HeaderPage>
        <ArrowSvg onClick={redirectToPost}>
          <ArrowBack size={25} />
        </ArrowSvg>

        <ContainerHederText>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "700",
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.light.secondary
                  : theme.palette.dark.light_grey,
            }}>
            {fullName}
          </Typography>
        </ContainerHederText>
      </HeaderPage>
      <UserPhoto changeIcon={false} avatarUrl={avatarUrl} imageUrl={imageUrl} />
      <ContainerUserInfo>
        {isSelf ? (
          <EditButton onClick={() => setIsModalOpen(true)} variant="outlined">
            Edit profile
          </EditButton>
        ) : (
          <FollowButton
            id={id}
            userName={userTag ? userTag : fullName}
            isFollowedByUser={isFollowedByUser}
          />
        )}
        <Typography
          variant="h6"
          sx={{
            fontSize: "20px",
            fontWeight: "800",
            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.common.secondary
                : theme.palette.dark.light_grey,
          }}>
          {fullName}
        </Typography>
        <Typography
          variant="body1"
          // color={"rgb(83, 100, 113)"}
          sx={{
            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.common.primary
                : theme.palette.dark.text_grey,
          }}>
          @{userTag}
        </Typography>
        <Typography
          component="div"
          variant="body1"
          color={"rgb(83, 100, 113)"}
          sx={{
            padding: "10px 0",
            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.common.secondary
                : theme.palette.dark.light_grey,
          }}>
          {bio}
        </Typography>
        <BoxInfo>
          {formattedBirthdate && (
            <TypographyInfo
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.common.primary
                    : theme.palette.dark.text_grey,
              }}>
              <Birhdate />
              {formattedBirthdate}
            </TypographyInfo>
          )}
          {location && (
            <TypographyInfo>
              <Location />
              {location}
            </TypographyInfo>
          )}
          {registrationDate && (
            <TypographyInfo>
              <Calendar />
              {registrationDate}
            </TypographyInfo>
          )}
        </BoxInfo>
        <Link
          color={"rgb(83, 100, 113)"}
          sx={{ cursor: "pointer" }}
          underline="hover"
          onClick={() => handleLinkClick(<LinkedUsers type="following" />, false)}>
          <Typography
            variant="span"
            sx={{
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.common.secondary
                  : theme.palette.dark.light_grey,
              fontWeight: "700",
            }}>
            {following}{" "}
          </Typography>
          Following
        </Link>

        <Link
          onClick={() => handleLinkClick(<LinkedUsers type="followers" />, true)}
          color={"rgb(83, 100, 113)"}
          underline="hover"
          sx={{
            cursor: "pointer",
            paddingLeft: "10px",
          }}>
          <Typography
            variant="span"
            sx={{
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.common.secondary
                  : theme.palette.dark.light_grey,
              fontWeight: "700",
            }}>
            {followers}{" "}
          </Typography>
          Followers
        </Link>
        {loading && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}>
            <CircularProgress />
          </div>
        )}
      </ContainerUserInfo>
    </>
  );
}

ProfileUser.propTypes = {
  isSelf: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func,
};
