import { Link, Stack, Typography } from "@mui/material";
import { RecommendedUsers } from "../../components";
import { containerSX, showMoreSX, titleSX } from "./styleSX";

export const WhoToFollow = () => {
  return (
    <Stack sx={containerSX}>
      <Typography variant="h2" sx={titleSX}>
        Who to follow
      </Typography>
      <RecommendedUsers />
      <Stack sx={showMoreSX}>
        <Link href="#">Show more</Link>
      </Stack>
    </Stack>
  );
};
