import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";
import TabContext from "@mui/lab/TabContext";
import Box from "@mui/material/Box";
import { useState } from "react";
import PropTypes from "prop-types";

export function ProfileTabs({ children, tabs, style }) {
  const [value, setValue] = useState("0");
  if (!tabs) return;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} sx={style}>
            {tabs.map((tab) => (
              <Tab
                disableRipple
                key={tab.value}
                label={tab.label}
                value={tab.value}
                sx={{
                  textTransform: "none",
                  fontSize: 15,
                  color: "#536471",
                  "&:focus": { color: "#0f1419", fontWeight: 700 },
                  "&:hover": {
                    backgroundColor: "rgba(15, 20, 25, 0.1)",
                    transitionDuration: "0.2s",
                  },
                }}
              />
            ))}
          </TabList>
        </Box>
        {children}
      </TabContext>
    </Box>
  );
}

ProfileTabs.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  tabs: PropTypes.array,
  style: PropTypes.object,
};
