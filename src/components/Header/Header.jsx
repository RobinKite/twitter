import { useMediaQuery } from "@mui/material";
import { Select, MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { MoreIcon } from "@/icons";
import { CreatePost, PostModal, Navigation } from "../../components";
import { setModalPost, setContent } from "../../redux/slices/appSlice";
import styles from "./Header.module.scss";
import { moreButtonSX, postButtonSX } from "./styledSX";
import FooterMobile from "../FooterMobile/FooterMobile";
import HeaderMobile from "../HeaderMobile/HeaderMobile";
// import { ReactComponent as ButtonPostRounded } from '../../assets/icons/post-rounded'

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
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(max-width: 1023px)");
  const isDesktop = !isMobile && !isTablet;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {isMobile && <HeaderMobile />}
      {!isMobile && <Navigation />}

      {!isMobile && (
        <>
          <Button
            id="basic-button"
            onClick={handleClick}
            startIcon={<MoreIcon size={30} />}
            className={styles.moreBtn}
            sx={moreButtonSX}>
            {isDesktop && "More"}
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
        </>
      )}

      <Button
        onClick={() => {
          dispatch(setModalPost(true));
          dispatch(setContent(<CreatePost avatarUrl={avatarUrl} />));
        }}
        sx={isDesktop ? postButtonSX.desktop : postButtonSX.mobile}>
        {isDesktop ? (
          "Post"
        ) : (
          // <ButtonPostRounded/>
          <svg
            style={{ height: "24px", width: "24px" }}
            viewBox="0 0 24 24"
            aria-hidden="true">
            <g>
              <path
                className={`${styles.whiteSvg} white-svg`}
                d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path>
            </g>
          </svg>
        )}
      </Button>

      {isMobile && <FooterMobile />}
      {isActiveModal && <PostModal avatarUrl={avatarUrl} isOpen={isActiveModal} />}
    </div>
  );
};
