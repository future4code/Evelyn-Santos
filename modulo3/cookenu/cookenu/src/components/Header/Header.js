import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {goToRecipes, goToLogin} from "../../routes/coordinators"
import {ToolbarStyle} from './styled'
import {useHistory} from "react-router-dom";



function Header() {
    const history = useHistory()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <ToolbarStyle>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Button onClick={()=>goToRecipes(history)} color="inherit">Cookenu</Button>
          <Button onClick={()=>goToLogin(history)} color="inherit">Login</Button>
        </ToolbarStyle>
      </AppBar>
    </Box>
  );
}

export default Header;