import { SearchBar } from "../../components";
import {} from "./styleSX";
import { Link, Stack, Typography } from "@mui/material";
import { RecommendedUsers } from "@/components";
import { sidebarSX, containerSX, showMoreSX, titleSX } from "./styleSX";

export const Sidebar = () => {
  return (
    <Stack sx={sidebarSX}>
      <SearchBar />
      <Stack sx={containerSX}>
        <Typography variant="h2" sx={titleSX}>
          Who to follow
        </Typography>
        <RecommendedUsers useButton={true} />
        <Stack sx={showMoreSX}>
          <Link href="#">Show more</Link>
        </Stack>
      </Stack>
    </Stack>
  );
};
