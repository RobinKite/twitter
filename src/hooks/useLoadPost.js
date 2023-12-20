import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularPosts, getPosts } from "@/redux/slices/postsSlice";
import { client } from "@/services";
import { Endpoint } from "@/constants";

export const useLoadPost = (callback) => {
  const dispatch = useDispatch();
  const accountUser = useSelector((state) => state.user.user);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [allPostsLoaded, setAllPostsLoaded] = useState(false);

  const checkIfMorePostsAvailable = async (page) => {
    try {
      const response = await client.get(Endpoint.GET_MY_POSTS, {
        params: { page, pageSize: 12 },
      });

      return response.data.content.length > 0;
    } catch (error) {
      console.error("Error checking for more posts:", error);
      return false;
    }
  };

  const loadMorePosts = async () => {
    if (!loading && !allPostsLoaded) {
      setLoading(true);
      const morePostsAvailable = await checkIfMorePostsAvailable(currentPage);

      if (morePostsAvailable) {
        dispatch(callback(currentPage))
          .then((response) => {
            const morePosts = response?.data?.content.length > 0;

            if (!morePosts) {
              setAllPostsLoaded(true);
              window.removeEventListener("scroll", handleScroll);
            }

            setCurrentPage((prevPage) => prevPage + 1);
          })
          .catch((error) => {
            console.error("Error loading more posts:", error);
          })
          .finally(() => {
            setLoading(false);
          });
      } else {
        setAllPostsLoaded(true);
        window.removeEventListener("scroll", handleScroll);
        setLoading(false);
      }
    }
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight + 10 >= scrollHeight && !loading && !allPostsLoaded) {
      loadMorePosts();
    }
  };

  useEffect(() => {
    accountUser.following
      ? dispatch(getPosts(currentPage))
      : dispatch(getPopularPosts(currentPage));

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPage, accountUser.following]);
};
