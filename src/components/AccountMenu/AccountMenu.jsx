import { MenuItem, Stack, useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ConfirmationDialog, CustomSelect } from "..";
import { fetchUser, logoutUserAction } from "@/redux/slices/userSlice";
import { useEffect, useState } from "react";
import { More } from "@/icons";
import { UserCard } from "../RecommendedUsers/RecommendedUsers";
import { storage } from "@/services";
import { WrapperAccountMenuSX } from "./styledSX";

const AccountMenu = () => {
  const dispatch = useDispatch();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useSelector((state) => state.user.user);
  const isMobile = useMediaQuery("(max-width: 767px)");

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const handleLogoutClick = () => {
    setDialogOpen(true);
    setIsMenuOpen(false);
  };

  const handleConfirmation = (confirmed) => {
    setDialogOpen(false);
    if (confirmed) {
      dispatch(logoutUserAction());
      storage.setTokens();
    }
  };

  const handleClickOnUserCard = () => {
    setIsMenuOpen(true);
  };

  return (
    user &&
    !isMobile && (
      <Stack direction="row" sx={WrapperAccountMenuSX}>
        <UserCard
          onClick={handleClickOnUserCard}
          avatarUrl={user.avatarUrl}
          fullName={user.fullName}
          userTag={user.userTag}>
          <Stack sx={{ flexGrow: 1, justifyContent: "center", marginLeft: "0.75rem" }}>
            <More size={18.75} color="#0f1419" style={{ display: "block" }} />
          </Stack>
        </UserCard>
        <CustomSelect
          open={isMenuOpen}
          onClose={setIsMenuOpen}
          customStyles={{ width: "300px", fontSize: "15px" }}>
          <MenuItem onClick={handleLogoutClick}>
            Log out @{user.userTag || user.fullName}
          </MenuItem>
        </CustomSelect>
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
