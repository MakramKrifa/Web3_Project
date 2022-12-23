import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { updateUser } from "../slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from '@mui/material/FormControl';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height:500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalUpdateUser({ open, onClose, data }) {
  
 

  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const handleRegistration = (data) => {
    console.log("data:", data);
    dispatch(updateUser(data));
    onClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit(handleRegistration)} style={{display:"flex",flexDirection:"column",justifyContent:"space-between", height:"100%"}} >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Update User
            </Typography>
            <TextField sx={{ width: 332 }}
              id="demo-helper-text-misaligned"
              label="ID"
              value={data?._id}
              {...register("id")}
            />
            <TextField sx={{ width: 332 }}
              id="demo-helper-text-misaligned"
              label="Username"
              defaultValue={data?.username}
              {...register("username")}
            />
            <TextField sx={{ width: 332 }}
              id="demo-helper-text-misaligned"
              label="Email"
              defaultValue={data?.email}
              type="email"
              {...register("email")}
            />
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                 
                  displayEmpty={true}
                  defaultValue={data?.role}
                  label="Role"
                  {...register("role")}
                >
                  <MenuItem value="user">user</MenuItem>
                  <MenuItem value="admin">admin</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Button
              variant="outlined"
              color="error"
              fullWidth
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button type="submit" fullWidth variant="contained">
              Validate
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
