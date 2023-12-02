import { getUserFollowers } from "@/redux/slices/userSlice";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RecommendedUserCard } from "../RecommendedUsers/RecommendedUsers";

function Followers() {
  const userFollowers = useSelector((state) => state.user.userFollowers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserFollowers());
  }, [dispatch]);

  return (
    <>
      {userFollowers &&
        userFollowers.map((user) => (
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

export default Followers;
