import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
// import Link from "react-router-dom"
import { FollowButton, UserPhoto } from "@/components";
import PropTypes from "prop-types";
import { ArrowBack } from "@/icons";
import {
  ArrowSvg,
  ContainerHederText,
  ContainerUserInfo,
  EditButton,
  HeaderPage,
} from "./styled.SX";

import { setContent, setModalPost } from "@/redux/slices/appSlice";
import Following from "@/components/Following/Following";
import Followers from "@/components/Followers/Followers";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProfileUser({
  fullName,
  avatarUrl,
  imageUrl,
  userTag,
  bio,
  setIsModalOpen,
  birthdate,
  following,
  followers,
  showFollowButton,
  id,
  isFollowedByUser,
}) {
  const dispatch = useDispatch();
  const formattedBirthdate = birthdate
    ? new Date(Number(birthdate) * 1000).toLocaleDateString()
    : "N/A";
  const navigate = useNavigate();
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
          <Typography variant="h6">{fullName}</Typography>
        </ContainerHederText>
      </HeaderPage>
      <UserPhoto changeIcon={false} avatarUrl={avatarUrl} imageUrl={imageUrl} />
      <ContainerUserInfo>
        {showFollowButton ? (
          <FollowButton
            id={id}
            userName={userTag ? userTag : fullName}
            isFollowedByUser={isFollowedByUser}
          />
        ) : (
          <EditButton onClick={() => setIsModalOpen(true)} variant="outlined">
            Edit profile
          </EditButton>
        )}
        <Typography variant="h6"> {fullName}</Typography>
        <Typography variant="body1">{userTag}</Typography>
        <Typography
          component="div"
          variant="body1"
          sx={{
            padding: "10px 0",
          }}>
          {bio}
        </Typography>
        <Typography variant="body2">{formattedBirthdate}</Typography>
        <Link
          color={"rgb(83, 100, 113)"}
          sx={{ cursor: "pointer", fontFamily: "" }}
          underline="hover"
          onClick={() => {
            dispatch(setModalPost(true));
            dispatch(setContent(<Following id={id} />));
          }}>
          {following} Following
        </Link>

        <Link
          onClick={() => {
            dispatch(setModalPost(true));
            dispatch(setContent(<Followers id={id} />));
          }}
          color={"rgb(83, 100, 113)"}
          underline="hover"
          sx={{
            cursor: "pointer",
            paddingLeft: "10px",
          }}>
          {followers} Followers
        </Link>
      </ContainerUserInfo>
    </>
  );
}

export default ProfileUser;
ProfileUser.propTypes = {
  setIsModalOpen: PropTypes.func,
  avatarUrl: PropTypes.string,
  fullName: PropTypes.string,
  imageUrl: PropTypes.string,
  bio: PropTypes.string,
  userTag: PropTypes.string,
  birthdate: PropTypes.string,
  following: PropTypes.number,
  id: PropTypes.string,
  followers: PropTypes.number,
  isFollowedByUser: PropTypes.string,
  showFollowButton: PropTypes.bool,
};
