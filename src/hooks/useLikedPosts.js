import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useLikedPosts = (likedPostsAction) => {
  const hasMoreLiked = useSelector((state) => state.user.hasMoreLiked);
  const [pageLiked, setPageLiked] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(resetPosts());
    dispatch(likedPostsAction());
  }, [dispatch]);

  const fetchPostsLiked = () => {
    setPageLiked((prevState) => prevState + 1);

    if (hasMoreLiked) {
      dispatch(likedPostsAction(pageLiked));
    }
  };

  return fetchPostsLiked;
};
export default useLikedPosts;
