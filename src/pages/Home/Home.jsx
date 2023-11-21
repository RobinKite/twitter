import TabPanel from "@mui/lab/TabPanel";
import { useState, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { Post, ProfileTabs, ItemPost } from "../../components";
import { getPosts } from "../../redux/slices/postsSlice";

const tabs = [
  { label: "Following", value: "0" },
  // { label: "Following", value: 1 },
];

export const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts, shallowEqual);
  const avatarUrl = posts.length > 0 ? posts[0].user.avatarUrl : null;

  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);

  // TODO: Move most code inside new hook to get rid of duplication

  const loadMorePosts = () => {
    if (!loading) {
      setLoading(true);
      // TODO: Add current user id to getPosts func
      dispatch(getPosts(currentPage))
        .then(() => {
          // TODO: Stop currentPage from infinitely increasing
          setCurrentPage((prevPage) => prevPage + 1);
        })
        .catch((error) => {
          console.error("Error loading more posts:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  console.log(currentPage);

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight && !loading) {
      loadMorePosts();
    }
  };

  useEffect(() => {
    // TODO: Fix error when upon component's first mounting posts are not fetching
    dispatch(getPosts(currentPage));

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPage]);

  return (
    <>
      {/* <button onClick={addPost}></button> */}
      <ProfileTabs
        tabs={tabs}
        variant="scrollable"
        scrollButtons="auto"
        style={{
          "& .MuiTabs-flexContainer": {
            justifyContent: "space-around",
          },
          button: {
            "&:hover": {
              backgroundColor: "#c9c3c381",
            },
          },
        }}>
        <TabPanel value="0" index={0}>
          <Post avatarUrl={avatarUrl} />
          {posts.map((p) => (
            <ItemPost
              key={p.id}
              avatarUrl={p.user.avatarUrl}
              fullName={p.user.fullName}
              content={p.body}
              replyCount={p.replyCount}
              imageUrls={p.imageUrls}
              id={p.id}
              likeCount={p.likeCount}
              liked={p.liked}
            />
          ))}
        </TabPanel>
        {/* <TabPanel value={1}></TabPanel> */}
      </ProfileTabs>
    </>
  );
};
