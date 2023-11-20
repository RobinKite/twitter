import SearchBar from "../SearchBar/SearchBar";
import WhoToFollow from "../WhoToFollow/WhoToFollow";
import { Stack } from "@mui/material";
import { rightSideBarSX } from "./styleSX";

const RightSideBar = () => {
  return (
    <Stack sx={rightSideBarSX}>
      <SearchBar />
      <WhoToFollow />
    </Stack>
  );
};

export default RightSideBar;
