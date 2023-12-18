import { useDispatch, useSelector } from "react-redux";

const useLikedPosts = (likedPostsAction) => {
  const hasMore = useSelector((state) => state.user.hasMore);

  const page = useSelector((state) => state.user.pageLiked);

  const dispatch = useDispatch();

  const fetchPostsLiked = () => {
    if (hasMore) {
      dispatch(likedPostsAction(page + 1));
    }
  };

  return fetchPostsLiked;
};
export default useLikedPosts;
