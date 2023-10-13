import React from "react";
import classNames from "classnames";
import SidebarItem from "../SidebarItem/SidebarItem";
import styles from "./Sidebar.module.scss";
import PostModal from "../PostModal/PostModal";
import { useSelector, useDispatch } from "react-redux";
import { setModalPost } from "../../redux/actions/modalPost";
import Button from "@mui/material/Button";


const Sidebar = () => {
  const dispatch = useDispatch();
  const toggleModalPost = () => {
    dispatch(setModalPost());
  };

  const secondModalOpen = useSelector((state) => state.postModal.isActive);

  return (
    <div className={classNames(styles.sidebar)}>
      <SidebarItem />
      <Button
        variant="contained"
        onClick={toggleModalPost}
        sx={{
          borderRadius: "20px",
          padding: "10px 70px",
          color: "rgb(255, 255, 255)",
          fontWeight: "700",
          fontSize: "25px",
        }}
      >
        Post</Button > 
        {secondModalOpen && <PostModal open={secondModalOpen} />}
    </div>
  );
};
export default Sidebar;
