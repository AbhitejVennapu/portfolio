import { useState } from "react";
import { Box, Stack} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Education from "./InformationComponents/Education";
import Projects from "./InformationComponents/Projects";
import WorkExperience from "./InformationComponents/WorkExperience";
import DownloadButton from "./InformationComponents/DownloadButton";
import TabBar from "./InformationComponents/TabBar";
import Navigation from "./InformationComponents/Navigation";

const Information = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>  
      <Stack direction="column"         
        sx={{
          height: "100vh",
          maxHeight: "100vh",
          backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#000" : "#FFF",
          color: (theme) => (theme.palette.mode === "dark" ? "#FFF" : "#000"),
          paddingRight: '5%',
          paddingLeft: '5%',
          position: 'relative'}}
          >
          <Box sx = {{paddingTop: '30px'}}>
            <DownloadButton></DownloadButton>
          </Box>
          {/* Component 2 */}
          <Box>
            <TabBar activeStep={activeStep} setActiveStep={setActiveStep}></TabBar>
          </Box>
          {/* Component 3 with dynamic height */}
          <Box sx = {{maxHeight: '65%', overflow: 'scroll', padding: '5%'}} >
            {activeStep === 0 && <Education />}
            {activeStep === 1 && <WorkExperience />}
            {activeStep === 2 && <Projects />}
          </Box>
          <Box position="absolute" bottom={0} sx = {{width :'90%'}}>
            <Navigation activeStep={activeStep} setActiveStep={setActiveStep}></Navigation>
          </Box>
      </Stack>
    </>
  );
};

export default Information;
