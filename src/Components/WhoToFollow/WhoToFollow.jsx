import React, { useState } from "react";
import RecommendedUsers from "../RecommendedUsers/RecommendedUsers";
import { Link, Stack, Typography } from "@mui/material";
import { containerSX, showMoreSX, titleSX } from "./styleSX";

const WhoToFollow = () => {
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

export default WhoToFollow;
