import { getUserFollowers } from "@/redux/slices/userSlice";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RecommendedUserCard } from "../RecommendedUsers/RecommendedUsers";

function Followers({ id }) {
  const usersFollowers = useSelector((state) => state.user.usersFollowers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserFollowers(id));
  }, [dispatch]);

  return (
    <>
      {usersFollowers &&
        usersFollowers.map((user) => (
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
Followers.propTypes = {
  id: PropTypes.string,
};
