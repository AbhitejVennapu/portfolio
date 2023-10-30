import React from 'react'
import { Box, Button } from '@mui/material'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const DownloadButton = () => {

  function handleDownloadClick() {

    const fileUrl = '/Resume.pdf';
  
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'CV_Abhitej'; 
    link.target = '_blank'; 
  
    document.body.appendChild(link);
    link.click();
  
    document.body.removeChild(link);
  }

  
  return (
    <>
      <Box sx = {{ alignItems: 'right', textAlign: 'right'}}>
        <Button>
          <FileDownloadOutlinedIcon onClick = {handleDownloadClick} 
        sx = {{color: (theme) => (theme.palette.mode === "dark" ? "#FFF" : "#000")}}/>
        </Button>
      </Box>
    </>
  )
}

export default DownloadButton
