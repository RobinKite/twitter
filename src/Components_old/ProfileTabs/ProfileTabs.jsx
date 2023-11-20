import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";
import TabContext from "@mui/lab/TabContext";
import Box from "@mui/material/Box";
import { useState } from "react";

export function ProfileTabs({ children, tabs, style }) {
  const [value, setValue] = useState("1");
  if (!tabs) return;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} sx={style} aria-label="lab API tabs example">
            {tabs.map((tab) => (
              <Tab label={tab.label} value={tab.value} key={tab.value} />
            ))}
          </TabList>
        </Box>
        {children}
      </TabContext>
    </Box>
  );
}
