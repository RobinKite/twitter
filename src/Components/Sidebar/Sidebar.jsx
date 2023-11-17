import React from "react";
import classNames from "classnames";
import SidebarItem from "../SidebarItem/SidebarItem";
import styles from "./Sidebar.module.scss";
import PostModal from "../PostModal/PostModal";
import { useSelector, useDispatch } from "react-redux";
import { setModalPost, setContent } from "../../redux/actions/modalPost";
import Button from "@mui/material/Button";
import Post from "../Post/Post";
import { useState } from "react";

const Sidebar = () => {
  const posts = useSelector((state) => state.posts.posts);
  const avatarUrl = posts.length > 0 ? posts[0].user.avatarUrl : null;
  const isActiveModal = useSelector(
    (state) => state.postModal.isActiveSetModal
  );
  const dispatch = useDispatch();

  return (
    <div className={classNames(styles.sidebar)}>
      <SidebarItem />
      <Button
        variant="contained"
        onClick={() => {
          dispatch(setModalPost(true));
          dispatch(setContent(<Post avatarUrl={avatarUrl} />));
        }}
        sx={{
          borderRadius: "20px",
          padding: "10px 70px",
          color: "rgb(255, 255, 255)",
          fontWeight: "700",
          fontSize: "25px",
        }}
      >
        Post
      </Button>
      {isActiveModal && (
        <PostModal avatarUrl={avatarUrl} isOpen={isActiveModal} />
      )}
    </div>
  );
};
export default Sidebar;
