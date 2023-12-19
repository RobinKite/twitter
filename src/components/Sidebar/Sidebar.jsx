import { Link, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RecommendedUsers, SearchBar } from "@/components";
import { sidebarSX, containerSX, showMoreSX, titleSX } from "./styleSX";
import { useState } from "react";

export const Sidebar = () => {
  const usersList = useSelector((state) => state.user.usersList);
  const [isShowMore, setIsShowMore] = useState(false);

  return (
    <Stack sx={sidebarSX}>
      <SearchBar />
      <Stack sx={containerSX}>
        <Typography variant="h2" sx={titleSX}>
          Who to follow
        </Typography>
        <RecommendedUsers
          useButton={true}
          usersList={usersList}
          isShowMore={isShowMore}
        />
        {!isShowMore && (
          <Stack
            sx={{
              ...showMoreSX,
              "&:hover": {
                backgroundColor: (theme) => theme.palette[theme.palette.mode].hover,
              },
            }}
            onClick={() => {
              setIsShowMore(true);
            }}>
            <Link
              href="#"
              sx={{
                "&:hover": {
                  backgroundColor: (theme) => theme.palette[theme.palette.mode].hover,
                },
              }}>
              Show more
            </Link>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};
