import { getUserFollowing } from "@/redux/slices/userSlice";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RecommendedUserCard } from "../RecommendedUsers/RecommendedUsers";

function Following({ id }) {
  const usersFollowing = useSelector((state) => state.user.usersFollowing);
  console.log(usersFollowing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserFollowing(id));
  }, [dispatch]);

  return (
    <>
      {usersFollowing &&
        usersFollowing.map((user) => (
          <RecommendedUserCard
            key={user.id}
            id={user.id}
            fullName={user.fullName}
            userTag={user.userTag}
            avatarUrl={user.avatarUrl}
            useButton={true}
            isFollowedByUser={user.isFollowedByUser}
            isInModal={true}
          />
        ))}
    </>
  );
}

export default Following;

Following.propTypes = {
  id: PropTypes.string,
};
