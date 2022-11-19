import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function DenseAppBar() {

    const navigate = useNavigate();
  return (
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar className='appbarmain' position="static">
        <Toolbar className='maintoolbar' variant="dense">
          <Typography style={{color:"green"}} onClick={()=>{navigate("/aboutme")}} variant="h6" color="inherit" component="div">
            My Portfolio
          </Typography>
          <div>
              <Button onClick={()=>{navigate("/aboutme")}} color="inherit">About Me</Button>
              <Button onClick={()=>{navigate("/education")}} color="inherit">Education</Button>
              <Button onClick={()=>{navigate("/skills")}} color="inherit">Skills</Button>
              <Button onClick={()=>{navigate("/projects")}} color="inherit">Project's</Button>
              <Button onClick={()=>{navigate("/contactme")}} color="inherit">Contact Me</Button>              
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}