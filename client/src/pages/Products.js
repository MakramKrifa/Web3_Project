import React from "react";
import Box from "@mui/material/Box";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCardList } from "../slices/cardlistSlice";
import CardProduct from "../components/CardProduct";
import Add from "@mui/icons-material/Add";
import { Fab } from "@mui/material";

import AddModalProduct from "../components/modaladdproduct";
const Products = ({Show}) => {
  const dispatch = useDispatch();
  const [OpenModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  useEffect(() => {
    dispatch(getCardList());
  }, [dispatch]);

  const cardlist = useSelector((state) => state.cardlistReducer.cardlistInfo);

  console.log("cardlist:", { cardlist });
  return (
    <>
      { Show && <Box style={{ position: "fixed", top: "73px", right: "20px" }}>
        <Fab color="primary" aria-label="add" onClick={handleOpenModal}>
          <Add />
        </Fab>
      </Box>}
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          // flexDirection: 'column',
          alignItems: "center",
          flexWrap: "wrap",
          padding: "10px 10px",
          justifyContent: "space-around",
        }}
      >
        {cardlist.map((card) => (
          <CardProduct key={card._id} {...card} />
        ))}

<AddModalProduct open={OpenModal} onClose={handleCloseModal}  />
      </Box>
    </>
  );
};

export default Products;
