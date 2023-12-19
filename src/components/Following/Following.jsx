import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { RecommendedUserCard } from "../RecommendedUsers/RecommendedUsers";

function Following() {
  const usersFollowing = useSelector((state) => state.user.usersFollowing);
  console.log(usersFollowing);

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
