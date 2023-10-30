import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { useTheme } from "@emotion/react";
const TabBar = ({ activeStep, setActiveStep }) => {
  const theme = useTheme();
  const handleChange = (event, newValue) => {
    console.log("new value", newValue);
    setActiveStep(parseInt(newValue));
    console.log("active step", activeStep);
  };
  return (
    <>
      <Box>
        <Tabs
          onChange={handleChange}
          value={activeStep.toString()}
          allowScrollButtonsMobile
          variant="scrollable"
          scrollButtons
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "transparent",
            },
          }}
        >
          <Tab
            label="Education"
            value="0"
            sx={{
              "&.Mui-selected": {
                color: (theme) =>
                  theme.palette.mode === "dark" ? "#FFF" : "#000",
                fontWeight: "bold",
              },
            }}
          />
          <Tab
            label="Work Experience"
            value="1"
            sx={{
              "&.Mui-selected": {
                color: (theme) =>
                  theme.palette.mode === "dark" ? "#FFF" : "#000",
                fontWeight: "bold",
              },
            }}
          />
          <Tab
            label="Projects"
            value="2"
            sx={{
              "&.Mui-selected": {
                color: (theme) =>
                  theme.palette.mode === "dark" ? "#FFF" : "#000",
                fontWeight: "bold"
              },
            }}
          />
        </Tabs>
      </Box>
    </>
  );
};

export default TabBar;
