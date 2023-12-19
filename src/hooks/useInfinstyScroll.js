import { useDispatch, useSelector } from "react-redux";

const useInfinstyScroll = ({ callback, slice, id }) => {
  const hasMore = useSelector((state) => state[slice]?.hasMore);
  const page = useSelector((state) => state[slice]?.page);

  const dispatch = useDispatch();

  const fetchPosts = () => {
    if (hasMore) {
      dispatch(callback(page + 1, id));
    }
  };
  return fetchPosts;
};
export default useInfinstyScroll;
