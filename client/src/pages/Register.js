import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import CircularProgress from '@mui/material/CircularProgress';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState,useRef,useEffect} from 'react'
import {userRegister} from '../slices/userSlice'
import {useDispatch,useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Register() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {loading,isAuth,errors,userInfo}=useSelector(state=>state.userReducer)
  
  // const email=useRef()
  // const password=useRef()
  // const username=useRef()
  // const role=useRef()
  const [showPassword,setshowPassword]=useState(false)
  const handleClickshowPassword=()=>{
    setshowPassword(!showPassword)
  }
  const [input, setInput] = React.useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const { register, handleSubmit,reset } = useForm();
  const handleAddNewUser = (data) => {
    console.log("data:", data);
    dispatch(userRegister({data}),navigate('/'));
    reset();
   
  };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log({
  //     username: username.current.value,
  //     email:email.current.value,
  //     password: password.current.value
     
  //   });
  //   dispatch(userRegister({data:{username:username.current.value,email:email.current.value,password:password.current.value,role:role.current.value},navigate}))
  // };

 
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />    
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap' }}>
    </Box>

        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form onSubmit={handleSubmit(handleAddNewUser)}>
          <Box  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  
                  autoComplete="given-name"
                  name="Username"
                  required
                  fullWidth
                  id="username"
                  label="User name"
                  autoFocus
                  {...register("username")}
                />
              </Grid>  
              <Grid item xs={12} >
                <TextField
                  
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  type="email"
                  {...register("email")}
                />
              </Grid>
              <Grid item xs={12}>
          <FormControl sx={{ mt: 0}} variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            required
            type={showPassword ? 'text' : 'password'}
            
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickshowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            {...register("password")}
          />
          
        </FormControl>
              </Grid>
              <Grid item xs={12} >
              {(userInfo.role ==="admin") && <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          
          label="Role"
          onChange={handleChange}
          
          required
          autoFocus
          {...register("role")}
         
        >
          <MenuItem value="user">user</MenuItem>
          <MenuItem value="admin">admin</MenuItem>
          
        </Select>
      </FormControl>}
      </Grid>
              {/* <Grid item xs={12} >
              {(userInfo.role ==="admin") &&<TextField
                  inputRef={role}
                  required
                  fullWidth
                  id="role"
                  label="Role"
                  name="role"
                  autoComplete="role"
                  defaultValue={"user"}
                  autoFocus
                />}
              </Grid> */}
              {errors && <p style={{color:'red'}}>{errors}</p>}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >          
             {loading?<CircularProgress  
            
             sx={{ '--CircularProgress-size': '80px' }}
             style ={{color:"white"}} 
            
             />:'Sign Up'}  
            </Button>
            
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
          </form>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
