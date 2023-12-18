import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ItemPost } from "..";
import { useEffect } from "react";
import { PostType } from "@/constants";
import { addRepostedPosts } from "@/redux/slices/postsSlice";

export const HomePostsContainer = () => {
  const accountUser = useSelector((state) => state.user.user);
  const posts = useSelector((state) => state.posts.posts, shallowEqual);
  const popularPosts = useSelector((state) => state.posts.popularPosts, shallowEqual);
  const renderPosts = !accountUser.following && !posts.length ? popularPosts : posts;
  const repostPosts = posts.filter((post) => post.type === PostType.QUOTE);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addRepostedPosts(repostPosts));
  }, []);

  return (
    <>
      {renderPosts.map((post) => (
        <ItemPost key={post.id} post={post} />
      ))}
    </>
  );
};
