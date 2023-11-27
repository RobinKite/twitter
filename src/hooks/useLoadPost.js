import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "@/redux/slices/postsSlice";

export const useLoadPost = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const loadMorePosts = () => {
    if (!loading) {
      setLoading(true);
      dispatch(getPosts(currentPage))
        .then(() => {
          // TODO: Stop currentPage from infinitely increasing
          setCurrentPage((prevPage) => prevPage + 1);
        })
        .catch((error) => {
          console.error("Error loading more posts:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    //  10 - magic number, so that if condition would better work on smaller screens
    if (scrollTop + clientHeight + 10 >= scrollHeight && !loading) {
      loadMorePosts();
    }
  };

  useEffect(() => {
    dispatch(getPosts(currentPage));

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPage]);
};
