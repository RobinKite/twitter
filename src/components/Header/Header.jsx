import { useMediaQuery, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MoreCircle, Feather } from "@/icons";
import { PostModal, Navigation, CommentPost } from "@/components";
import { setModalPost, setContent } from "@/redux/slices/appSlice";
import { moreButtonSX, postButtonSX } from "./styledSX";
import { PostType } from "@/constants";
import FooterMobile from "../FooterMobile/FooterMobile";
import HeaderMobile from "../HeaderMobile/HeaderMobile";
import HeaderSelect from "@/components/Header/HeaderSelect";
import HeaderDrawer from "./HeaderDrawer";
import AcccountMenu from "../AccountMenu/AccountMenu";
import { Themes } from "@/themes/theme";

export const Header = () => {
  const theme = useTheme();
  const posts = useSelector((state) => state.posts.posts);
  const avatarUrl = posts.length > 0 ? posts[0].user.avatarUrl : null;
  const isPostModalActive = useSelector((state) => state.app.isPostModalActive);
  const dispatch = useDispatch();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 767px) and (max-width: 1023px)");
  const isDesktop = useMediaQuery("(min-width: 1023px)");

  const [isSelectOpen, setIsSelectOpen] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: isTablet ? "center" : "unset",
        position: !isMobile ? "sticky" : "static",
        top: 0,
        left: 0,
        height: "100vh",
        maxWidth: 275,
      }}>
      {isMobile && (
        <>
          <HeaderDrawer />
          <HeaderMobile />
          <FooterMobile />
        </>
      )}

      {!isMobile && <Navigation />}

      {!isMobile && (
        <>
          <Button
            id="basic-button"
            onClick={() => setIsSelectOpen(true)}
            sx={moreButtonSX}>
            <MoreCircle
              size={26.25}
              style={{
                fill:
                  theme.palette.mode === Themes.LIGHT
                    ? theme.palette.light.secondary
                    : theme.palette.dark.light_grey,
              }}
            />
            {isDesktop && "More"}
          </Button>
          <HeaderSelect open={isSelectOpen} onClose={() => setIsSelectOpen(false)} />
        </>
      )}

      <Button
        onClick={() => {
          dispatch(setModalPost(true));
          dispatch(
            setContent(
              <CommentPost
                placeholder="What is happening?!!"
                buttonName="Post"
                type={PostType.TWEET}
              />,
            ),
          );
        }}
        sx={
          (isDesktop && postButtonSX.desktop) ||
          (isTablet && postButtonSX.tablet) ||
          (isMobile && postButtonSX.mobile)
        }>
        {isDesktop ? "Post" : <Feather size={22} style={{ fill: "#fff" }} />}
      </Button>

      <PostModal avatarUrl={avatarUrl} isOpen={isPostModalActive} />

      <AcccountMenu />
    </div>
  );
};
