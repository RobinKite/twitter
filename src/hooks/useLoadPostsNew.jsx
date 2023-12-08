import { resetPosts } from "@/redux/slices/postsSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useLoadPostsNew = (callback) => {
  const hasMore = useSelector((state) => state.posts.hasMore);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(resetPosts());
    dispatch(callback());
  }, [dispatch]);

  const fetchPosts = () => {
    setPage((prevState) => prevState + 1);

    if (hasMore) {
      dispatch(callback(page));
    }
  };

  return fetchPosts;
};

export default useLoadPostsNew;
