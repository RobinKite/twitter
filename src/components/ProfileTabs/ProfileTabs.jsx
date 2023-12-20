import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";
import TabContext from "@mui/lab/TabContext";
import Box from "@mui/material/Box";
import { useState } from "react";
import PropTypes from "prop-types";
import { Themes } from "@/themes/theme";

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
                  color: (theme) =>
                    theme.palette.mode === Themes.LIGHT
                      ? theme.palette.common.primary
                      : theme.palette.dark.text_grey,
                  "&:focus": {
                    color: (theme) =>
                      theme.palette.mode === Themes.LIGHT
                        ? theme.palette.common.secondary
                        : theme.palette.dark.light_grey,
                    fontWeight: 700,
                  },
                  "&:hover": {
                    backgroundColor: (theme) => theme.palette[theme.palette.mode].hover,
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
