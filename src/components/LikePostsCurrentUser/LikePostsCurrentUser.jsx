import { getCurrentLikedPosts } from "@/redux/slices/currentUser";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemPost } from "..";
import PropTypes from "prop-types";

function LikePostsCurrentUser({ id }) {
  const currentLikedPosts = useSelector((state) => state.currentUser.currentLikedPosts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentLikedPosts(id));
  }, [dispatch, id]);
  return (
    <>
      {currentLikedPosts.length ? (
        currentLikedPosts.map((post) => (
          <ItemPost
            avatarUrl={post.user.avatarUrl}
            fullName={post.user.fullName}
            key={post.id}
            content={post.body}
            imageUrls={post.imageUrls}
            id={post.id}
            likeCount={post.likeCount}
            liked={post.liked}
            replyCount={post.replyCount}
          />
        ))
      ) : (
        <>User has no liked posts</>
      )}
      {/* 
          Uncomment the following lines if you want to include a notification component:
          <NotificationTabContent
            title={'You do not have any likes yet'}
            text="Tap the heart on any post to show it some love. When you do, it’ll show up here."
          />
          */}
    </>
  );
}

export default LikePostsCurrentUser;
LikePostsCurrentUser.propTypes = {
  id: PropTypes.string,
};
