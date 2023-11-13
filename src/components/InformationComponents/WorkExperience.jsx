import profile_data from '../../data/profile-data.json'
import ContentTemplate from '../common/ContentTemplate';
import { Box } from '@mui/material';

const WorkExperience = () => {
    const experiences = profile_data.WorkExperience;
  return (
    <>
      { 
        experiences.map((experience, index) => (
          <Box sx = {{marginTop: '15px'}} key = {index}>
            <ContentTemplate 
                position = {experience.Position} 
                organisation = {experience.Organisation} 
                startDate={experience.StartDate}
                endDate={experience.EndDate}
                location = {experience.Location} 
                description={experience.Responsibilities}> 
            </ContentTemplate>
            </Box>
            
        ))
      }
    </>
  )
}

export default WorkExperience
