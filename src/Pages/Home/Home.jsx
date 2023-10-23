import styles from "./Home.module.scss";
import LabTabs from "../../Components/ProfileTabs";
import TabPanel from "@mui/lab/TabPanel";
import Post from "../../Components/Post/Post";
import ItemPost from "../../Components/ItemPost/ItemPost";

const tabs = [
  { label: "Following", value: "1" },
  // { label: "Following", value: "2" },
];
const Home = () => {
  
  return (
    <>
      <h1>Home</h1>
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
           <ItemPost  />
        </TabPanel>
        {/* <TabPanel value="2"></TabPanel> */}
      </LabTabs>
    </>
  );
};
export default Home;
