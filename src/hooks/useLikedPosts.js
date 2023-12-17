import { resetPosts } from "@/redux/slices/userSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useLikedPosts = (likedPostsAction) => {
  console.log();
  const hasMore = useSelector((state) => state.user.hasMore);

  const page = useSelector((state) => state.user.pageLiked);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetPosts());
    // dispatch(likedPostsAction(page));
  }, [dispatch]);

  const fetchPostsLiked = () => {
    if (hasMore) {
      dispatch(likedPostsAction(page + 1));
    }
  };

  return fetchPostsLiked;
};
export default useLikedPosts;
