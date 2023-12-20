import { Stack, Avatar, styled } from "@mui/material";
import { Typography as MuiTypohraphy } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Cross } from "@/icons";
import { toggleUserSelection } from "@/redux/slices/messagingSlice";

const Wrapper = styled(Stack, {
  shouldForwardProp: (prop) => prop !== "isHovered",
})(({ isHovered }) => ({
  flexDirection: "row",
  alignItems: "center",
  border: "1px solid #CFD9DE",
  borderRadius: "1rem",
  padding: "0.2rem 0.75rem 0.2rem 0.2rem",
  cursor: "pointer",
  backgroundColor: isHovered ? "#EDF5FD" : "transparent",
  overflow: "hidden",
}));

const Typography = styled(MuiTypohraphy)({
  marginRight: "0.75rem",
  fontWeight: 600,
  fontSize: "0.9375rem",
  whiteSpace: "nowrap",
  overflow: "hidden",
});

export const SelectedUser = (user) => {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Wrapper
      isHovered={isHovered}
      onClick={() => dispatch(toggleUserSelection(user))}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <Avatar
        src={user.avatarUrl}
        sx={{ height: 24, width: 24, marginRight: "0.5rem" }}
      />
      <Typography>{user.fullName}</Typography>
      <Cross size={20} fill="#4A99E9" sx={{ marginLeft: "0.75rem" }} />
    </Wrapper>
  );
};
