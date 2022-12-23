import * as React from 'react';
import Button from '@mui/joy/Button';
import TextField from '@mui/joy/TextField';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Stack from '@mui/joy/Stack';
import Add from '@mui/icons-material/Add';
import Typography from '@mui/joy/Typography';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { postcard } from '../slices/cardlistSlice';
import { useForm } from "react-hook-form";
//
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MultipleSelectChip from './inputselect.jsx';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

//

export default function BasicModalDialog() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  
  const { register, getValues } = useForm();
  const [open, setOpen] = React.useState(false);
  const dispatch=useDispatch()
  const name=useRef()
  const description=useRef()
  const price=useRef()
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log({"name":name.current.value,price:event.currentTarget.get('price')});
  //   console.log("name1");
  // };
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="neutral"
        startDecorator={<Add />}
        onClick={() => setOpen(true)}
      >
        New Card
      </Button>
      <Modal style={{zindex:'-1'}} open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{
            maxWidth: 500,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
          }}
        >
          <Typography
            id="basic-modal-dialog-title"
            component="h2"
            level="inherit"
            fontSize="1.25em"
            mb="0.25em"
          >
            Create new card
          </Typography>
          <Typography
            id="basic-modal-dialog-description"
            mt={0.5}
            mb={2}
            textColor="text.tertiary"
          >
            Fill in the information of the card.
          </Typography>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              console.log("test");
              const singleValue = getValues("name");
              console.log({
                name: singleValue
                
              });
              // console.log({"name":name.target.value,"description":description.Target.value,"price":price.Targetvalue})
              // dispatch(postcard({name:name,description:description}))
  
              


              setOpen(false);
            }}
          >
            <Stack spacing={2}>

            <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth   style={{zindex:'10'}} >
        <InputLabel style={{zindex:'10'}} id="demo-simple-select-label">Age</InputLabel>
        <Select  style={{zindex:'10'}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>

<MultipleSelectChip zindex={1}/>
              <TextField
              //  ref={name} 
              id="name"
               label="name" 
               autoFocus 
               {...register("name")}
               />
              
              <TextField 
              // ref={description} 
              label="description" 
              id="description" 
              {...register("description")}
              />
              <TextField 
              // ref={price} 
              label="Price" />
              <Button type="submit"
              variant="contained"
                color = "primary"
              
              
              >Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
    
  );
}
