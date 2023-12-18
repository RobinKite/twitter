import { useDispatch, useSelector } from "react-redux";

const useFetchPosts = (getPosts) => {
  const hasMore = useSelector((state) => state.posts.hasMore);
  const page = useSelector((state) => state.posts.page);

  const dispatch = useDispatch();

  const fetchPosts = () => {
    if (hasMore) {
      dispatch(getPosts(page + 1));
    }
  };
  return fetchPosts;
};
export default useFetchPosts;
