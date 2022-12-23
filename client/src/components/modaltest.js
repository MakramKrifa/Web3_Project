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

//

export default function BasicModalDialog() {
  const theme = createTheme();
  const [open, setOpen] = React.useState(false);
  const dispatch=useDispatch()
  const name=useRef()
  const description=useRef()
  const price=useRef()
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({"name":name.current.value,price:event.currentTarget.get('price')});
    console.log("name1");
    dispatch(postcard({data:{name:name.current.value,description:description.current.value,price:price.current.value}}))
  };
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
      <Modal open={open} onClose={() => setOpen(false)}>
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
              console.log({"name":name.currentTarget,"description":description.current.value,"price":price.current.value})
              dispatch(postcard({data:{name:name.current.value,description:description.current.value,price:price.current.value}}))
  
              setOpen(false);
            }}
          >
            <Stack spacing={2}>
              <TextField
               ref={name} 
               label="Name" 
               autoFocus 
               required />
              <TextField ref={description} label="Description" required />
              <TextField ref={price} label="Price" required />
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
