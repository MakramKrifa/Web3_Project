import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Link from '@mui/material/Link';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import {NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { logout } from '../slices/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';






function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate=useNavigate()
  const dispatch=useDispatch()
  
  const {userInfo,isAuth}=useSelector(state=>state.userReducer)
  console.log(isAuth)
  console.log(userInfo.username)
  
  const pages = [
    {
        path:'/',
        name:'Home',
        auth:isAuth
    },
    {
        path:'/register',
        name:'Register',
        auth:false
    },
    
    
    
    
];
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
const handleLogout= () => { 
dispatch(logout())
navigate('/login')
}
const handleRegisterAdmin= () => { 
  
  navigate('/register')
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>

                  <NavLink style={{color:'black',textDecoration:'none'}} to={page.path}>{page.name}</NavLink>
                </MenuItem>
              ))}
               {/* {!isAuth && <Button 
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
              <NavLink style={{color:'black',textDecoration:'none'}} to='/login'>Login</NavLink>
              </Button>}
               {(userInfo.role ==="admin") &&<MenuItem  onClick={handleCloseNavMenu}>
                  <NavLink style={{color:'black',textDecoration:'none'}} to='/dashboard'>Dashboard</NavLink>
                </MenuItem>} */}
                {!isAuth &&<MenuItem  onClick={handleCloseNavMenu}>
                  <NavLink style={{color:'black',textDecoration:'none'}} to='/login'>Login</NavLink>
                </MenuItem>}
                {(userInfo.role ==="admin") &&<MenuItem  onClick={handleCloseNavMenu}>
                  <NavLink style={{color:'black',textDecoration:'none'}} to='/dashboard'>Dashboard</NavLink>
                </MenuItem>}

            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                  <NavLink style={{color:'white',textDecoration:'none'}} to={page.path}>{page.name}</NavLink>
              </Button>
            ))}
  {!isAuth && <Button 
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              <NavLink style={{color:'white',textDecoration:'none'}} to='/login'>Login</NavLink>
              </Button>}
  {(userInfo.role ==="admin") && <Button 
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              <NavLink style={{color:'white',textDecoration:'none'}} to='/dashboard'>Dashboard</NavLink>
              </Button>}
              {/* {isAuth && <Button 
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              <NavLink style={{color:'white',textDecoration:'none'}} to='/products'>Products</NavLink>
              </Button>} */}
          </Box>
          
  
          <Box sx={{ flexGrow: 0 }}>

          <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>{userInfo?.username?.charAt(0).toUpperCase()}</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {isAuth &&<MenuItem>
          <Avatar /> {userInfo.username}:{userInfo.role} <br/>
          {userInfo.email}
        </MenuItem>}
        
        <Divider />
        {(userInfo.role ==="admin") && <MenuItem onClick={handleRegisterAdmin}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account admin
          

        </MenuItem>}
        {isAuth && <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>}
        {isAuth &&<MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>}
      </Menu>
    </React.Fragment> 
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
