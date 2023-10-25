import styles from "./Home.module.scss";
import LabTabs from "../../Components/ProfileTabs";
import TabPanel from "@mui/lab/TabPanel";
import Post from "../../Components/Post/Post";
import ItemPost from "../../Components/ItemPost/ItemPost";
import React, { useState, useEffect } from 'react';

const access_token =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMkBnbWFpbC5jb20iLCJpYXQiOjE2OTgwNDI5NTEsImV4cCI6MTY5ODA4NjE1MX0.91QCoZLAhSWLsyFf9HWGCbP5gqDJn7reA-p14877n8s";
const refresh_token =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMkBnbWFpbC5jb20iLCJpYXQiOjE2OTgwNDI5NTEsImV4cCI6MTY5ODY0Nzc1MX0.T7XZEerJNZYe6JNgQM5mR2itiaEB0jljfKWdx_vbpDY";

const tabs = [
  { label: "Following", value: "1" },
  // { label: "Following", value: "2" },
];
const Home = () => {
  const [content, setContent] = useState(null);
// console.log(content);

  useEffect(() => {
    
    fetch("https://danit-final-twitter-8f32e99a3dec.herokuapp.com/posts/home", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${refresh_token}`,
      },
    })
      .then((response) => response.json())
      .then(({ content }) => {
        setContent(content); 
      })
      .catch((error) => {
        console.error("Сталася помилка:", error);
      });
  }, []);

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
          <ItemPost content={content}/>
        </TabPanel>
        {/* <TabPanel value="2"></TabPanel> */}
      </LabTabs>
     
    </>
  );
};
export default Home;
