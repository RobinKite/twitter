import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { container, notificationMassage } from "./styleSX";
import PropTypes from "prop-types";

const AllNo = [
  {
    id: "1",
    fullName: "Taras Karas",
    avatarUrl: "/",
    massage:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque molestias ad dignissimos perferendis modi, officiis cumque inventore sint laudantium commodi, numquam magni repellendus quidem, libero officia quae. Alias, quia cum.",
  },
];

// eslint-disable-next-line react/prop-types
const AllNotificationsContainer = ({ fullName, avatarUrl, massage }) => {
  return (
    <Stack sx={container}>
      <Stack>+</Stack>
      <Stack sx={notificationMassage}>
        <Avatar src={avatarUrl} alt={`${fullName}'s avatar`} />
        <Typography
          variant="subtitle1"
          component="div"
          fontSize="14px"
          fontWeight="bold"
          paddingTop="15px">
          {fullName}
        </Typography>
        <Typography>{massage}</Typography>
      </Stack>
    </Stack>
  );
};

export const AllNotifications = () => {
  return (
    <Stack>
      {AllNo.map((user, index) => (
        <AllNotificationsContainer key={index} {...user} id={user.id} />
      ))}
    </Stack>
  );
};

AllNotificationsContainer.PropTypes = {
  id: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string,
  massage: PropTypes.string,
};
