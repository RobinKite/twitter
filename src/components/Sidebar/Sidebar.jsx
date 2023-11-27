import { Link, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RecommendedUsers, SearchBar } from "@/components";
import { sidebarSX, containerSX, showMoreSX, titleSX } from "./styleSX";

export const Sidebar = () => {
  const usersList = useSelector((state) => state.user.usersList);

  return (
    <Stack sx={sidebarSX}>
      <SearchBar />
      <Stack sx={containerSX}>
        <Typography variant="h2" sx={titleSX}>
          Who to follow
        </Typography>
        <RecommendedUsers useButton={true} usersList={usersList} />
        <Stack sx={showMoreSX}>
          <Link href="#">Show more</Link>
        </Stack>
      </Stack>
    </Stack>
  );
};
