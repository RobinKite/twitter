import { useDispatch, useSelector } from "react-redux";

const useInfinityScroll = ({ callback, slice, id }) => {
  const hasMore = useSelector((state) => state[slice]?.hasMore);
  const page = useSelector((state) => state[slice]?.page);

  const dispatch = useDispatch();

  const fetchPosts = () => {
    if (hasMore) {
      dispatch(callback(page + 1, id));
    }
  };
  const delayedFetchPosts = () => {
    setTimeout(fetchPosts, 300);
  };

  return delayedFetchPosts;
};
export default useInfinityScroll;
