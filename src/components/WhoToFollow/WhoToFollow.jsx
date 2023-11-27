import { Link, Stack, Typography } from "@mui/material";
import { containerSX, showMoreSX, titleSX } from "./styleSX";
import { RecommendedUsers } from "..";
import { useSelector } from "react-redux";

export const WhoToFollow = () => {
  const usersList = useSelector((state) => state.user.usersList);
  return (
    <Stack sx={containerSX}>
      <Typography variant="h2" sx={titleSX}>
        Who to follow
      </Typography>
      <RecommendedUsers useButton={true} usersList={usersList} />
      <Stack sx={showMoreSX}>
        <Link href="#">Show more</Link>
      </Stack>
    </Stack>
  );
};
