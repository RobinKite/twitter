import styles from "./Home.module.scss";
import LabTabs from "../../Components/ProfileTabs";
import TabPanel from "@mui/lab/TabPanel";
import Post from "../../Components/Post/Post";
import ItemPost from "../../Components/ItemPost/ItemPost";
import React, { useState, useEffect } from 'react';
import {api} from "../../service/api";
import {useSelector} from "react-redux";


const tabs = [
  { label: "Following", value: "1" },
  // { label: "Following", value: "2" },
];
const Home = () => {
  const [content, setContent] = useState([]);
  const {isAuthenticated} = useSelector(state => state.user);

  useEffect(() => {
      if (isAuthenticated) {
          api.get('posts/home')
              .then(r => setContent(r.data.content));
      }
  }, [isAuthenticated])

    if (!isAuthenticated) return "Not authenticated...";

  return (
    <>
  
      <h1>Home</h1>
      {/* <button onClick={addPost}></button> */}
      <LabTabs
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
        }}
      >
        <TabPanel value="1">
          <Post />
            {content.map(p => <ItemPost content={p}/>)}
        </TabPanel>
        {/* <TabPanel value="2"></TabPanel> */}
      </LabTabs>
     
    </>
  );
};
export default Home;
