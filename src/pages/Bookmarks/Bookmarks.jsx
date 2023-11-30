import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const Bookmarks = () => {
  const email = useSelector((state) => state.user.user.userTag);
  console.log(email);
  return (
    <Box
      sx={{
        borderRight: "1px solid #EFF3F4",
        borderLeft: "1px solid #EFF3F4",
        paddingLeft: "16px",
        height: "100vh",
      }}>
      <Typography
        variant="h1"
        sx={{
          color: "#0F1419",
          fontSize: "20px",
          fontWeight: 700,
          marginTop: "10px",
        }}>
        Bookmarks
      </Typography>
      <Typography variant="h5" sx={{ color: "#536471", fontSize: "13px" }}>
        {email}
      </Typography>

      <Box sx={{ margin: "32px auto", padding: "0 32px", maxWidth: "calc(5 * 80px)" }}>
        <Typography
          variant="h2"
          sx={{
            color: "#0F1419",
            fontSize: "30px",
            fontWeight: 800,
            marginBottom: "8px",
          }}>
          Save posts for later
        </Typography>
        <Typography variant="h5" sx={{ color: "#536471", fontSize: "15px" }}>
          Bookmark posts to easily find them again in the future.
        </Typography>
      </Box>
    </Box>
  );
};

export default Bookmarks;
