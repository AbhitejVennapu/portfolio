import { useState } from "react";
import { Button, Box, Tab, Tabs, Stack, Grid } from "@mui/material";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useTheme } from "@mui/material/styles";

const Navigation = ({activeStep, setActiveStep}) => {
  const theme = useTheme();
  const maxSteps = 3;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
    <MobileStepper
          variant="dots"
          steps={3}
          position="static"
          activeStep={activeStep}
          sx = {{
            "& .MuiMobileStepper-dotActive": {
              backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#FFF" : "#000",
              // Specify your desired text color
            },
            "& .MuiButtonBase-root": {
              color: (theme) =>
              theme.palette.mode === "dark" ? "#FFF" : "#000",
              // Specify your desired text color
            },
            "& .Mui-disabled": {
              color: '#00000042'
              // Specify your desired text color
            },
            background: 'transparent'

          }}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>
          }
          >
          </MobileStepper>
          </>
  )
}

export default Navigation
