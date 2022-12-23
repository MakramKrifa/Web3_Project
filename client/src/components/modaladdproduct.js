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
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import { addNewProduct, getCardList } from "../slices/cardlistSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const buttonStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};

export default function AddModalProduct({ open, onClose }) {
  
  const [file, setFile] = useState();
  const dispatch = useDispatch();
  const { register, handleSubmit,reset } = useForm();
  const handleAddNewProduct = (data) => {
    console.log("data:", data);
    dispatch(addNewProduct({...data,file}));
    onClose();
    reset();
   
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
          <form
            onSubmit={handleSubmit(handleAddNewProduct)}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add new product
            </Typography>
            <TextField
              sx={{ width: 332 }}
              id="demo-helper-text-misaligned"
              label="Product name"
              {...register("name")}
            />
            <TextField
              sx={{ width: 332 }}
              id="demo-helper-text-misaligned"
              label="Product reference"
              {...register("reference")}
            />
            <TextField
              sx={{ width: 332 }}
              id="demo-helper-text-misaligned"
              label="Product price"
              type="number"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">DT</InputAdornment>
                ),
              }}
              {...register("price")}
            />
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  displayEmpty={true}
                  defaultValue="Electrical"
                  label="Product category"
                  {...register("category")}
                >
                  <MenuItem value="Electrical">Electrical</MenuItem>
                  <MenuItem value="Automation">Automation</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <TextField
              sx={{ width: 332 }}
              id="demo-helper-text-misaligned"
              label="Product image"
              type="file"
              focused
              onChange={e=>setFile(e.target.files[0])}
              
            />


            <TextField
              id="outlined-multiline-static"
              label="Product description"
              multiline
              rows={4}
              {...register("description")}
            />

            <Box sx={buttonStyle}>
              <Button
                variant="outlined"
                color="error"
                fullWidth
                onClick={onClose}
              >
                Cancel
              </Button>
              <span> &nbsp;</span>
              <Button type="submit" fullWidth variant="contained">
                Validate
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
