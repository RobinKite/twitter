import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, } from "react-router-dom";
import ItemPost from "../../Components/ItemPost/ItemPost";
import { ReactComponent as ArrowBack } from "../Profile/svg/arrow.svg";
import { IconButton } from "@mui/material";
import { Typography,Box,styled, } from "@mui/material";
import Post from "../../Components/Post/Post";
import ComentPost from "../../Components/ComentPost/ComentPost";
import { useNavigate  } from 'react-router-dom';
const HeaderPage = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "10px 0 5px 20px",
  gap:20
}));



const PostPages = () => {
    
  const { id } = useParams();
  const posts = useSelector((state) => state.posts.posts);
  const post = posts.find((post) => post.id === id);
  console.log(post);
  const navigate = useNavigate();
  const redirectToPost = () => {
   
    navigate(`/`,{ replace: true });
  };
  // if (!post) {
  //   return <div>Пост не знайдено</div>;
  // }

  



  return (
    <>
      <HeaderPage>
        <IconButton onClick={redirectToPost}>
          <ArrowBack />
        </IconButton>

        <Typography variant="h6">POST</Typography>
      </HeaderPage>
      <ItemPost
        key={post.id}
        content={post.body}
        imageUrls={post.imageUrls}
        id={post.id}
        likeCount ={post.likeCount }
        liked={post.liked}
      />
      <ComentPost id={post.id}/>
    </>
  );
};
export default PostPages;
