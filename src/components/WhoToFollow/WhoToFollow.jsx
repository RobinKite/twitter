import { Link, Stack, Typography } from "@mui/material";
import { containerSX, showMoreSX, titleSX } from "./styleSX";
import { RecommendedUsers } from "..";

export const WhoToFollow = () => {
  return (
    <Stack sx={containerSX}>
      <Typography variant="h2" sx={titleSX}>
        Who to follow
      </Typography>
      <RecommendedUsers useButton={true} />
      <Stack sx={showMoreSX}>
        <Link href="#">Show more</Link>
      </Stack>
    </Stack>
  );
};
