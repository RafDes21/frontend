import { useAppSelector, useAppDispatch } from "../redux/hooks/hooks";
import { closeModal } from "../redux/slices/client.Slice";

import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { AiFillCloseCircle } from "react-icons/ai";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  height: 200,
  fontSize: 30,
  bgcolor: "background.paper",
  color: "#ffff",
  boxShadow: 24,
  p: 4,
};

const CompModal = () => {
  const dispatch = useAppDispatch();
  const client = useAppSelector((state) => state.clients.selectedClient);
  const stateModal = useAppSelector((state) => state.clients.isModalOpen);

  return (
    <Modal sx={style} open={stateModal}>
      <Container>
        <Typography align="center" variant="h5">
          DATA
        </Typography>
        <Typography>Name: {client?.name}</Typography>
        <Typography>Address: {client?.address}</Typography>
        <Typography>Document: {client?.document}</Typography>
        <Typography>Phone: {client?.phone}</Typography>
        <AiFillCloseCircle
          style={{
            color: "#181C9D",
            textShadow: "2px 4px 6px #010101",
            cursor: "pointer",
          }}
          onClick={() => dispatch(closeModal())}
        />
      </Container>
    </Modal>
  );
};

export default CompModal;
