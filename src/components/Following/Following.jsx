import { getUserFollowing } from "@/redux/slices/userSlice";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RecommendedUserCard } from "../RecommendedUsers/RecommendedUsers";

function Following() {
  const userFollowing = useSelector((state) => state.user.userFollowing);

  const dispatch = useDispatch();
  console.log(userFollowing);
  useEffect(() => {
    dispatch(getUserFollowing());
  }, [dispatch]);

  return (
    <>
      {userFollowing &&
        userFollowing.map((user) => (
          <RecommendedUserCard
            key={user.id}
            id={user.id}
            fullName={user.fullName}
            userTag={user.userTag}
            avatarUrl={user.avatarUrl}
            useButton={true}
            isFollowedByUser={user.isFollowedByUser}
          />
        ))}
    </>
  );
}

export default Following;
