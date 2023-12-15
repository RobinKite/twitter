import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { RecommendedUserCard } from "../RecommendedUsers/RecommendedUsers";
function Followers() {
  const usersFollowers = useSelector((state) => state.user.usersFollowers);

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
            isInModal={true}
          />
        ))}
    </>
  );
}

export default Followers;
Followers.propTypes = {
  id: PropTypes.string,
};
