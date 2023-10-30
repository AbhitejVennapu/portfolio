import React from 'react'
import { Box, Button } from '@mui/material'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ResumePDF from '../../assets/Resume.pdf';
const DownloadButton = () => {

  // function handleDownloadClick() {

  //   const fileUrl = {ResumePDF};
  
  //   const link = document.createElement('a');
  //   link.href = fileUrl;
  //   link.download = 'CV_Abhitej'; 
  //   link.target = '_blank'; 
  
  //   document.body.appendChild(link);
  //   link.click();
  
  //   document.body.removeChild(link);
  // }

  
  return (
    <>
      <Box sx = {{ alignItems: 'right', textAlign: 'right'}}>
      <a
        href={ResumePDF}
        download="AbhitejCV"
        target="_blank"
        rel="noreferrer"
      >  
        <Button>
          <FileDownloadOutlinedIcon 
        sx = {{color: (theme) => (theme.palette.mode === "dark" ? "#FFF" : "#000")}}/>
        </Button>
        </a>
      </Box>
    </>
  )
}

export default DownloadButton
