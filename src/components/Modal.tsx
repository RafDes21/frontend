import React from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useAppSelector, useAppDispatch } from "../redux/hooks/hooks";
import { AiFillCloseCircle } from "react-icons/ai";
import { updateStateModal } from "../redux/slices/clienteSlice";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  height:200,
  fontSize: 30,
  bgcolor: "background.paper",
  color:"#ffff",
  boxShadow: 24,
  p: 4,
};

const CompModal: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const client = useAppSelector((state) => state.clients.client);
  const stateModal = useAppSelector((state) => state.clients.stateModal);

  const closeModal = () => {
    dispatch(updateStateModal(!stateModal));
  };

  return (
    <Modal sx={style} open={stateModal}>
      <Container>
        <Typography align="center" variant="h5">DATOS</Typography>
        <Typography>Nombre: {client.nombre}</Typography>
        <Typography>Dirección: {client.direccion}</Typography>
        <Typography>DNI: {client.documento}</Typography>
        <Typography>TELEFONO: {client.telefono}</Typography>
        <AiFillCloseCircle style={{color:"#181C9D", textShadow:"2px 4px 6px #010101", cursor:"pointer"}} onClick={closeModal} />
      </Container>
    </Modal>
  );
};

export default CompModal;

