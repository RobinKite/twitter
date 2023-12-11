import { MenuItem, Select, Stack, useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ConfirmationDialog } from "..";
import { getUserInfo, logoutUserAction } from "@/redux/slices/userSlice";
import { useEffect, useState } from "react";
import { MoreMenu } from "@/icons";
import { UserCard } from "../RecommendedUsers/RecommendedUsers";
import { WrapperAccountMenuSX, moreSelectMenuPropsSX, moreSelectSX } from "./styledSX";

const AccountMenu = () => {
  const dispatch = useDispatch();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useSelector((state) => state.user.user);

  const isTablet = useMediaQuery("(min-width: 768px) and (max-width:1023px)");
  const isMobile = useMediaQuery("(max-width: 767px)");

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
    user &&
    !isMobile && (
      <Stack
        direction="row"
        sx={[WrapperAccountMenuSX, { width: isTablet ? "72px" : "260px" }]}>
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