import { Typography, Box } from "@mui/material";

import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" sx={{backgroundColor: '#4a4a4a', color:'white', padding:'1rem', width: '100%', marginTop: 'auto'}}>
        <Typography variant="body2" align="center">
            @ {currentYear} My App. All rights reserved.
        </Typography>
    </Box>
  )
}

export default Footer
