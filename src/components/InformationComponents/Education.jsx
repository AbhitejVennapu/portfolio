import profile_data from '../../data/profile-data.json'
import ContentTemplate from '../common/ContentTemplate';
import { Box } from '@mui/material';

const Education = () => {
  const education  = profile_data.Education;
  return (
    <>
      { 
        education.map((education, index) => (
          <Box sx = {{marginTop: '15px'}} key = {index}>
            <ContentTemplate 
                position = {education.CourseOfStudy} 
                organisation = {education.University} 
                startDate={education.StartDate}
                endDate={education.EndDate} 
                description={education.Coursework}> 
            </ContentTemplate>
            </Box>
            
        ))
      }
    </>
  )
}

export default Education
