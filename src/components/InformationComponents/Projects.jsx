import { Typography, Stack } from '@mui/material'
import React from 'react'
import profile_data from '../../data/profile-data.json'


const Projects = () => {
  const projects = profile_data.Projects;
  return (
    <div>
        { projects.map((project, index) => (
          <Stack spacing = {1} key = {index} sx= {{alignItems: 'left', textAlign: 'left', paddingBottom: '30px'}}>
            <Typography sx = {{ fontWeight : "700", fontSize: "17px"}}>{project.Title}</Typography>
            { project.Description.map((description, index) => (
              <Typography key = {index}
              sx = {{ 
                fontWeight : "500", 
                fontSize: "13px", 
                marginTop: '3px', 
                color: (theme) => (theme.palette.mode === "dark" ? "#BBB" : "#777")}}>
                  {description}
                  </Typography>
            ))
            }
          </Stack>
        ))
        }
    </div>
  )
}

export default Projects
