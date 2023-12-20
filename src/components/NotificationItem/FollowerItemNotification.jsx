import { Avatar, Stack, Typography } from "@mui/material";
import { ContainerSX } from "./styleSX";
import { ProfileIcon } from "@/icons";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export function FollowerItemNotification(initiator) {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/user/${id}`);
  };

  return (
    <ContainerSX
      direction="row"
      onClick={() => handleClick(initiator.id)}
      sx={{
        transition: "background-color 0.2s linear",
        "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.03)" },
      }}>
      <Stack>
        <ProfileIcon size={30} fill="#1d9bf0" />
      </Stack>
      <Stack flexGrow={1}>
        <Avatar src={initiator.avatarUrl} alt={`${initiator.fullName}'s avatar`} />
        <Typography sx={{ fontWeight: 700 }}>
          {initiator.fullName}
          <Typography variant="span" sx={{ fontWeight: 400 }}>
            &#x20;followed you.
          </Typography>
        </Typography>
      </Stack>
    </ContainerSX>
  );
}

FollowerItemNotification.propTypes = {
  initiator: PropTypes.object,
};
