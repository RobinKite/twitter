import { useMediaQuery } from "@mui/material";

import Button from "@mui/material/Button";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { MoreIcon, PostRoundedButton } from "@/icons";
import { CreatePost, PostModal, Navigation } from "../../components";
import { setModalPost, setContent } from "../../redux/slices/appSlice";

import { moreButtonSX, postButtonSX } from "./styledSX";
import FooterMobile from "../FooterMobile/FooterMobile";
import HeaderMobile from "../HeaderMobile/HeaderMobile";
import HeaderSelect from "@/components/Header/HeaderSelect";
import HeaderDrawer from "./HeaderDrawer";

export const Header = () => {
  const posts = useSelector((state) => state.posts.posts);
  const avatarUrl = posts.length > 0 ? posts[0].user.avatarUrl : null;
  const isActiveModal = useSelector((state) => state.app.isPostModalActive);
  const dispatch = useDispatch();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(max-width: 1023px)");
  const isDesktop = !isMobile && !isTablet;
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  return (
    <div>
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
            startIcon={<MoreIcon size={30} />}
            sx={moreButtonSX}>
            {isDesktop && "More"}
          </Button>
          <HeaderSelect open={isSelectOpen} onClose={() => setIsSelectOpen(false)} />
        </>
      )}

      <Button
        onClick={() => {
          dispatch(setModalPost(true));
          dispatch(setContent(<CreatePost avatarUrl={avatarUrl} />));
        }}
        sx={isDesktop ? postButtonSX.desktop : postButtonSX.mobile}>
        {isDesktop ? "Post" : <PostRoundedButton size={22} />}
      </Button>

      {isActiveModal && <PostModal avatarUrl={avatarUrl} isOpen={isActiveModal} />}
    </div>
  );
};
