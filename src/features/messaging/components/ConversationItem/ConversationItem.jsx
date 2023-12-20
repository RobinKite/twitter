import { Stack, Typography, IconButton, Avatar, styled } from "@mui/material";
import { Menu as MuiMenu, MenuItem as MuiMenuItem } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { More, Delete, ExitChat } from "@/icons";
import { deleteConversation, leaveConversation } from "@/redux/slices/messagingSlice";

const Wrapper = styled(Stack, { shouldForwardProp: (prop) => prop !== "isActive" })(
  ({ isActive }) => ({
    cursor: "pointer",
    position: "relative",
    transition: "background-color 200ms",
    borderRightWidth: "2px",
    borderRightStyle: "solid",
    borderRightColor: isActive ? "#4A99E9" : "transparent",
    backgroundColor: isActive ? "#F0F3F4" : "transparent",

    "&:hover": { backgroundColor: "#F7F9F9" },
  }),
);

const Title = styled(Typography, { shouldForwardProp: (prop) => prop !== "isActive" })(
  ({ isActive }) => ({
    fontWeight: isActive ? 500 : 600,
    fontSize: "0.9375rem",
    color: "#0F1419",
    whiteSpace: "nowrap",
  }),
);

const Menu = styled(MuiMenu)({
  "& .MuiPaper-root": {
    boxShadow: "0 0 15px rgba(101,119,134,0.2), 0 0 3px 1px rgba(101,119,134,0.15)",
    borderRadius: "0.75rem",
  },

  "& .MuiList-root": {
    padding: 0,
  },
});

const MenuItem = styled(MuiMenuItem)({
  display: "flex",
  alignItems: "center",
  columnGap: "0.5rem",
  color: "#F4232E",
  paddingBlock: "0.625rem",

  "&:hover": {
    backgroundColor: "#F7F7F7",
  },
});

export const ConversationItem = ({
  id,
  avatarURL,
  titleText,
  metaText,
  messageText,
  creator,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [anchorElement, setAnchorElement] = useState(null);
  const currentConversation = useSelector((state) => state.messaging.currentConversation);
  const user = useSelector((state) => state.user.user);
  const isActive = currentConversation?.id === id;
  const isCreator = creator?.id === user.id;

  const handleOpenMenu = ({ target }) => {
    setOpenMenu(true);
    setAnchorElement(target);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
    setAnchorElement(null);
  };

  const handleDeleteConversation = () => {
    dispatch(deleteConversation(id));
    handleCloseMenu();
    navigate("/messages");
  };

  const handleLeaveConversation = () => {
    dispatch(leaveConversation(id));
    handleCloseMenu();
    navigate("/messages");
  };

  return (
    <Wrapper
      isActive={isActive}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <Stack
        onClick={() => navigate(`/messages/${id}`)}
        sx={{ flexDirection: "row", padding: "1rem" }}>
        <Avatar src={avatarURL} sx={{ marginRight: "0.75rem" }} />
        <Stack sx={{ overflow: "hidden", marginRight: "2.75rem" }}>
          <Stack direction="row" sx={{ columnGap: "0.5rem" }}>
            <Title isActive={isActive}>{titleText}</Title>
            <Typography
              sx={{
                fontSize: "0.9375rem",
                color: "#536471",
                whiteSpace: "nowrap",
              }}>
              {metaText}
            </Typography>
          </Stack>
          <Typography
            sx={{
              fontSize: "0.9375rem",
              color: "#0F1419",
              overflow: "hidden",
              whiteSpace: "nowrap",
              marginRight: "0.5rem",
            }}>
            {messageText}
          </Typography>
        </Stack>
      </Stack>
      {isHovered && (
        <>
          <IconButton
            onClick={handleOpenMenu}
            sx={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}>
            <More size={18.75} />
          </IconButton>
          <Menu
            open={openMenu}
            onClose={handleCloseMenu}
            anchorEl={anchorElement}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}>
            {isCreator ? (
              <MenuItem onClick={handleDeleteConversation}>
                <Delete fill="#F4232E" size={18.75} />
                <Typography sx={{ fontWeight: 600, fontSize: "0.9125rem" }}>
                  Delete
                </Typography>
              </MenuItem>
            ) : (
              <MenuItem onClick={handleLeaveConversation}>
                <ExitChat fill="#F4232E" size={18.75} />
                <Typography sx={{ fontWeight: 600, fontSize: "0.9125rem" }}>
                  Leave
                </Typography>
              </MenuItem>
            )}
          </Menu>
        </>
      )}
    </Wrapper>
  );
};

ConversationItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatarURL: PropTypes.string,
  titleText: PropTypes.string.isRequired,
  metaText: PropTypes.string.isRequired,
  messageText: PropTypes.string.isRequired,
  creator: PropTypes.object,
};
