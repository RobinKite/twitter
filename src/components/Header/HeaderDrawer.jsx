import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { ReactComponent as ProfileIcon } from "../../assets/svg/profile.svg";
import { ReactComponent as ListIcon } from "../../assets/svg/list.svg";
import { ReactComponent as CommunitiesIcon } from "../../assets/svg/communities.svg";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "@/redux/slices/appSlice";

const HeaderDrawer = () => {
  //temp change
  const handleMenuItemClick = () => {};
  const dispatch = useDispatch();
  const open = useSelector((state) => state.app.isDrawerActive);
  const onClose = () => dispatch(setDrawer(false));
  //TODO: use Navlink instead of ListItem and onClick, remove handleMenuItemClick
  //TODO: map items
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List
        sx={{
          "& .css-bshv44-MuiButtonBase-root-MuiListItem-root": {
            color: "#000000",
          },
          "& .css-10hburv-MuiTypography-root": {
            fontSize: 20,
            fontWeight: 800,
          },
        }}>
        <ListItem button onClick={() => handleMenuItemClick("/profile")}>
          <ListItemIcon>
            <ProfileIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button onClick={() => handleMenuItemClick("/lists")}>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary="Lists" />
        </ListItem>
        <ListItem button onClick={() => handleMenuItemClick("/bookmarks")}>
          <ListItemIcon>
            <BookmarkBorderIcon style={{ color: "#000000" }} />
          </ListItemIcon>
          <ListItemText primary="Bookmarks" />
        </ListItem>
        <ListItem button onClick={() => handleMenuItemClick("/communities")}>
          <ListItemIcon>
            <CommunitiesIcon />
          </ListItemIcon>
          <ListItemText primary="Communities" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default HeaderDrawer;
