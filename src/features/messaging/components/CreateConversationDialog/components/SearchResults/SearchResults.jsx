import { Stack, Avatar, Box, styled } from "@mui/material";
import { Typography as MuiTypography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Tick } from "@/icons";
import { toggleUserSelection } from "@/redux/slices/messagingSlice";

const SearchResult = styled(Stack)({
  alignItems: "center",
  flexDirection: "row",
  padding: "0.75rem 1rem",
  columnGap: "0.75rem",
  cursor: "pointer",
  transition: "background-color 200ms",

  "&:hover": {
    backgroundColor: "#F7F9F9",
  },
});

const Typography = styled(MuiTypography)({
  fontSize: "0.9375rem",
  lineHeight: 1.4,
});

export const SearchResults = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.messaging.searchResults);
  const selectedUsers = useSelector((state) => state.messaging.selectedUsers);
  const isSelected = (id) => selectedUsers.filter((user) => user.id === id).length !== 0;

  return (
    <Stack sx={{ overflowY: "auto" }}>
      {searchResults.map((user) => (
        <SearchResult key={user.id} onClick={() => dispatch(toggleUserSelection(user))}>
          <Avatar src={user.avatarUrl} sx={{ height: 40, width: 40 }} />
          <Stack>
            <Typography sx={{ fontWeight: 600 }}>{user.fullName}</Typography>
            <Typography sx={{ color: "#536471" }}>@{user.userTag}</Typography>
          </Stack>
          {isSelected(user.id) && (
            <Box sx={{ marginLeft: "auto" }}>
              <Tick fill="#4A99E9" size={18.75} />
            </Box>
          )}
        </SearchResult>
      ))}
    </Stack>
  );
};
