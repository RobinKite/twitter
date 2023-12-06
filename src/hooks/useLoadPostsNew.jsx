import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useLoadPostsNew = (callback) => {
  const hasMore = useSelector((state) => state.posts.hasMore);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const fetchPosts = () => {
    setPage((prevState) => prevState + 1);
    setTimeout(() => {
      if (hasMore) {
        dispatch(callback(page));
      } else {
        console.log("No more data");
      }
    }, 200);
  };

  return fetchPosts;
};

export default useLoadPostsNew;
// useEffect(() => {
//   dispatch(getMyPosts(page));
//   setPage((prevState) => prevState + 1);
// }, [dispatch]);

// const fetchContacts = () => {
//   setPage((prevState) => prevState + 1);
//   setTimeout(() => {
//     if (hasMore) {
//       dispatch(getMyPosts(page));
//     }
//   }, 1000);
// };
// const fetchContacts = () => {
//   setPage((prevState) => prevState + 1);
//   console.log("Fetching page:", page); // Логуємо значення page
//   setTimeout(() => {
//     if (hasMore) {
//       dispatch(getMyPosts(page));
//     } else {
//       // Якщо вже немає додаткових даних, встановлюємо hasMore на false
//       console.log("No more data"); // Логуємо, що більше даних немає

//     }
//   }, 200);
// };
