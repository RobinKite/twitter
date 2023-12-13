import { getLikedPosts } from "@/redux/slices/userSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemPost } from "..";

function LikePostsUser() {
  const likedPosts = useSelector((state) => state.user.likedPosts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLikedPosts());
  }, [dispatch]);
  return (
    <>
      {likedPosts.length ? (
        likedPosts.map((post) => (
          <ItemPost
            postUser={post.user}
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
        <>You don&apos;t have any likes yet</>
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

export default LikePostsUser;
