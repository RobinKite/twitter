import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import PropTypes from "prop-types";
import { resetPosts } from "@/redux/slices/postsSlice";

const useFetchPosts = (getPosts) => {
  const hasMore = useSelector((state) => state.posts.hasMore);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetPosts());
    dispatch(getPosts());
  }, [dispatch]);

  const fetchPosts = () => {
    setPage((prevState) => prevState + 1);

    if (hasMore) {
      dispatch(getPosts(page));
    }
  };

  return fetchPosts;
};

export default useFetchPosts;

// usefetchPosts.propTypes = {
//   getPosts: PropTypes.func,
// };
