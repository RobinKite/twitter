import styles from "./Home.module.scss";
import LabTabs from "../../Components/ProfileTabs";
import TabPanel from "@mui/lab/TabPanel";
import Post from "../../Components/Post/Post";
import ItemPost from "../../Components/ItemPost/ItemPost";
import React, { useState, useEffect } from "react";
import { compareByDate } from "../../utils/function";
import { useSelector } from "react-redux";
import { getPosts } from "../../redux/actions/createPost";
import { useDispatch, shallowEqual } from "react-redux";

const tabs = [
  { label: "Following", value: "1" },
  // { label: "Following", value: "2" },
];
const Home = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);
  const posts = useSelector((state) => state.posts.posts, shallowEqual);
  const avatarUrl = posts.length > 0 ? posts[0].user.avatarUrl : null;

  // Скрол постів infinite scroll   //////////////////////////////////////////////////////////////

  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const loadMorePosts = () => {
    if (!loading) {
      setLoading(true);
      dispatch(getPosts(currentPage))
        .then(() => {
          setCurrentPage((prevPage) => prevPage + 1);
        })
        .catch((error) => {
          console.error('Error loading more posts:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight && !loading) {
        loadMorePosts();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading, currentPage]);

  useEffect(() => {
    if (isAuthenticated) {
      // Початкове завантаження постів
      loadMorePosts();
    }
  }, [isAuthenticated]);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     dispatch(getPosts());
     
  //   }
  // }, [isAuthenticated]);

  

  
  if (!isAuthenticated) return "Завантаження";
  return (
    <>
      <h1>Home</h1>
      {/* <button onClick={addPost}></button> */}
      <LabTabs
        tabs={tabs}
        variant="scrollable"
        scrollButtons="auto"
        style={{
          "& .MuiTabs-flexContainer": {
            justifyContent: "space-around",
          },
          button: {
            "&:hover": {
              backgroundColor: "#c9c3c381",
            },

          },
        }}
      >
        <TabPanel value="1">
          <Post avatarUrl={avatarUrl} />
          {posts?.sort(compareByDate).map((p) => (
            <ItemPost
              avatarUrl={p.user.avatarUrl}
              fullName={p.user.fullName}
              key={p.id}
              content={p.body}
              replyCount={p.replyCount}
              imageUrls={p.imageUrls}
              id={p.id}
              likeCount={p.likeCount}
              liked={p.liked}
            />
          ))}
        </TabPanel>
        {/* <TabPanel value="2"></TabPanel> */}
      </LabTabs>
    </>
  );
};
export default Home;
