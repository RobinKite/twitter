import { MenuItem, Select, Stack, useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ConfirmationDialog } from "..";
import { getUserInfo, logoutUserAction } from "@/redux/slices/userSlice";
import { useEffect, useState } from "react";
import { MoreMenu } from "@/icons";
import { moreSelectMenuPropsSX, moreSelectSX } from "../Header/styledSX";
import { UserCard } from "../RecommendedUsers/RecommendedUsers";

const AccountMenu = () => {
  const dispatch = useDispatch();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useSelector((state) => state.user.user);

  const isTablet = useMediaQuery("(min-width: 768px) and (max-width:1023px)");

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  const handleLogoutClick = () => {
    setDialogOpen(true);
    setIsMenuOpen(false);
  };

  const handleConfirmation = (confirmed) => {
    setDialogOpen(false);
    if (confirmed) {
      dispatch(logoutUserAction());
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("accessToken");
    }
  };

  const handleClickOnUserCard = () => {
    setIsMenuOpen(true);
  };

  return (
    user && (
      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          cursor: "pointer",
          width: isTablet ? "72px" : "260px",
          marginTop: "auto",
        }}>
        <UserCard
          onClick={handleClickOnUserCard}
          avatarUrl={user.avatarUrl}
          fullName={user.fullName}
          userTag={user.userTag}>
          <MoreMenu size={18} color="#0f1419" style={{ display: "block" }} />
        </UserCard>
        <Select
          open={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          sx={moreSelectSX}
          id="basic-menu"
          MenuProps={moreSelectMenuPropsSX}>
          <MenuItem onClick={handleLogoutClick}>
            Log out @{user.userTag || user.fullName}
          </MenuItem>
        </Select>
        {dialogOpen && (
          <ConfirmationDialog
            open={dialogOpen}
            title="Log out of X?"
            description="You can always log back in at any time. If you just want to switch accounts, you can do that by adding an existing account."
            actionButton={{ title: "Log out", callback: () => handleConfirmation(true) }}
            closeButton={{ title: "Cancel", callback: () => handleConfirmation(false) }}
          />
        )}
      </Stack>
    )
  );
};

export default AccountMenu;
