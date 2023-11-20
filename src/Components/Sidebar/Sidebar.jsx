import { Stack } from "@mui/material";
import { SearchBar, WhoToFollow } from "../../components";
import { rightSideBarSX } from "./styleSX";

export const Sidebar = () => {
  return (
    <Stack sx={rightSideBarSX}>
      <SearchBar />
      <WhoToFollow />
    </Stack>
  );
};
