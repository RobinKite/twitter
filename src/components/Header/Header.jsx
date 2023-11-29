import { useMediaQuery } from "@mui/material";
import { Select, MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { More, Bookmark } from "@/icons";
import { CreatePost, PostModal, Navigation } from "../../components";
import { setModalPost, setContent } from "../../redux/slices/appSlice";
import styles from "./Header.module.scss";

// const Sidebar = () => {
//   const posts = useSelector((state) => state.posts.posts);
//   const avatarUrl = posts.length > 0 ? posts[0].user.avatarUrl : null;
//   const isActiveModal = useSelector(
//     (state) => state.postModal.isActiveSetModal
//   );
//   const dispatch = useDispatch();

export const Header = () => {
  const posts = useSelector((state) => state.posts.posts);
  const avatarUrl = posts.length > 0 ? posts[0].user.avatarUrl : null;
  const isActiveModal = useSelector((state) => state.app.isPostModalActive);
  const dispatch = useDispatch();
  const isMobile = useMediaQuery("(max-width: 1280px)");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const handleOpenMenu = (event) => {
  //   setAnchorEl(event.currentTarget);
  //   setIsButtonActive(true); // Activate the button
  // };

  // const handleCloseMenu = () => {
  //   setAnchorEl(null);
  //   setIsButtonActive(false); // Activate the button
  // };

  return (
    <div>
      <Navigation />

      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        startIcon={<More size={30} />}
        className={styles.moreBtn}
        sx={{
          color: "black",
          fontSize: "1.25rem",
          borderRadius: "2rem",
          display: "flex",
          gap: "1rem",
          position: "relative",
          fontWeight: 400,
          padding: "0.5rem 0.75rem",
          textTransform: "capitalize",
          margin: "0 0 1.25rem 0",
          "&:hover": {
            backgroundColor: "rgb(221, 217, 217)",
          },

          "& .css-1tnmhci-MuiButtonBase-root-MuiButton-root": {
            justifyContent: "flex-start",
          },
          "& .css-1d6wzja-MuiButton-startIcon": {
            margin: 0,
          },
        }}>
        {isMobile ? <span className={styles.hideText}>More</span> : "More"}
      </Button>

      <Select
        sx={{
          position: "relative",
          "& .MuiSelect-select": {
            display: "none",
          },
        }}
        id="basic-menu"
        // anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        inputProps={{ IconComponent: () => null }}
        MenuProps={{
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          transformOrigin: {
            vertical: "bottom",
            horizontal: "left", // Match the end of the menu with the end of the button
          },
          PaperProps: {
            sx: {
              position: "absolute",
              borderRadius: 5,
              "& .css-6hp17o-MuiList-root-MuiMenu-list": {
                paddingTop: 0,
                paddingBottom: 0,
                backgroundColor: "#ffffff",
              },
              "& .MuiMenuItem-root": {
                padding: 2,
                fontSize: 20,
                fontWeight: 700,
                minWidth: 318,

                gap: 3,
                "&:hover": {
                  backgroundColor: "#eff3f4",
                },
              },
            },
          },
        }}>
        <MenuItem component={Link} to="/bookmarks">
          <BookmarkBorderIcon />
          Bookmarks
        </MenuItem>
        <MenuItem>
          <DisplaySettingsIcon />
          Display
        </MenuItem>
      </Select>
      {isMobile ? (
        // For mobile version
        <Button
          onClick={() => {
            dispatch(setModalPost(true));
            dispatch(setContent(<CreatePost avatarUrl={avatarUrl} />));
          }}
          sx={{
            margin: 0,
            backgroundColor: "#1d9bf0",
            color: "#ffffff",
            // width: 50,
            // height: 60,
            height: 0,
            minWidth: 0,

            padding: "26px 14px",
            "&:hover": {
              backgroundColor: "#1a8cd8",
            },
          }}>
          <Bookmark />
        </Button>
      ) : (
        // For desktop version
        <Button
          onClick={() => {
            dispatch(setModalPost(true));
            dispatch(setContent(<CreatePost avatarUrl={avatarUrl} />));
          }}
          sx={{
            color: "#ffffff",
            boxShadow: "none",
            backgroundColor: " #1d9bf0",
            borderRadius: "45px",
            // height: "52px",
            fontWeight: 700,
            minWidth: "233px",
            fontSize: "17px",
            margin: 0,

            "&:hover": {
              boxShadow: "none",
              backgroundColor: "#1a8cd8",
            },
          }}>
          Post
        </Button>
      )}
      <PostModal avatarUrl={avatarUrl} isOpen={isActiveModal} />
    </div>
  );
};
