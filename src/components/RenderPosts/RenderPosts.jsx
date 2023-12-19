import { getMyPosts } from "@/redux/slices/postsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemPost } from "..";
import PropTypes from "prop-types";
import { getCurrentPosts } from "@/redux/slices/currentUser";

function RenderPosts({ id, statePost }) {
  const posts = useSelector((state) =>
    statePost ? state.currentUser.currentPosts : state.posts.myPosts,
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (statePost) {
      dispatch(getCurrentPosts(null, id));
    } else {
      dispatch(getMyPosts());
    }
  }, [dispatch, id, statePost]);

  return (
    <>
      {posts.length ? (
        posts.map((post) => (
          <ItemPost
            key={post.id}
            postUser={post.user}
            avatarUrl={post.user.avatarUrl}
            fullName={post.user.fullName}
            replyCount={post.replyCount}
            id={post.id}
            content={post.body}
            likeCount={post.likeCount}
            liked={post.liked}
            imageUrls={post.imageUrls}
          />
        ))
      ) : (
        <>{statePost ? "User has no posts" : "You don't have any posts yet"}</>
      )}
    </>
  );
}

export default RenderPosts;
RenderPosts.propTypes = {
  id: PropTypes.string,
  statePost: PropTypes.bool,
};
