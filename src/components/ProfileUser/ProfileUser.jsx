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
import Following from "@/components/Following/Following";
import Followers from "@/components/Followers/Followers";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Location } from "@/icons/custom/Location";
import { Calendar } from "@/icons/custom/Calendar";
import { Birhdate } from "@/icons/custom/Birthdate";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";

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
  location,
  createdAt,
}) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleLinkClick = (component) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      dispatch(setModalPost(true));
      dispatch(setContent(component));
    }, 1000);
  };

  const formattedBirthdate = birthdate
    ? new Date(Number(birthdate) * 1000).toLocaleDateString()
    : null;
  const registrationDate = createdAt
    ? new Date(Number(createdAt) * 1000).toLocaleDateString()
    : null;
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
          <Typography variant="h6" sx={{ fontWeight: "700" }}>
            {fullName}
          </Typography>
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
        <Typography variant="h6" sx={{ fontSize: "20px", fontWeight: "800" }}>
          {fullName}
        </Typography>
        <Typography variant="body1" color={"rgb(83, 100, 113)"}>
          @{userTag}
        </Typography>
        <Typography
          component="div"
          variant="body1"
          color={"rgb(83, 100, 113)"}
          sx={{
            padding: "10px 0",
          }}>
          {bio}
        </Typography>
        <BoxInfo>
          {formattedBirthdate && (
            <TypographyInfo>
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
          onClick={() => handleLinkClick(<Following id={id} />)}>
          <span style={{ color: "black", fontWeight: "700" }}>{following} </span>Following
        </Link>

        <Link
          onClick={() => handleLinkClick(<Followers id={id} />)}
          color={"rgb(83, 100, 113)"}
          underline="hover"
          sx={{
            cursor: "pointer",
            paddingLeft: "10px",
          }}>
          <span style={{ color: "black", fontWeight: "700" }}>{followers} </span>Followers
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
  isFollowedByUser: PropTypes.bool,
  showFollowButton: PropTypes.bool,
  location: PropTypes.string,
  createdAt: PropTypes.string,
};
