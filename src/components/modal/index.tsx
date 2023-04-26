import { useAppSelector, useAppDispatch } from "../../redux/hooks/hooks";
import { closeModal } from "../../redux/slices/client.Slice";
import { Modal, Typography, Box } from "@mui/material";
import { AiFillCloseCircle } from "react-icons/ai";
import logo from "../../assets/logo.png";
import "./styles.css";

const ModalData = () => {
  const dispatch = useAppDispatch();
  const client = useAppSelector((state) => state.clients.selectedClient);
  const stateModal = useAppSelector((state) => state.clients.isModalOpen);

  return (
    <Modal open={stateModal} sx={{ borderRadius: 2 }}>
      <Box className="boxModal">
        <Typography textAlign={"start"}>
          <img className="ModalLogo" src={logo} alt="dentist"/>
        </Typography>
        <Typography
          variant="h5"
          textAlign={"center"}
          textTransform={"uppercase"}
        >
          Information
        </Typography>
        <Box my={4}>
          <Typography my={2}>NAME: {client?.name}</Typography>
          <Typography my={2}>ADDRESS: {client?.address}</Typography>
          <Typography my={2}>DOCUMENT: {client?.document}</Typography>
          <Typography my={2}>PHONE: {client?.phone}</Typography>
          <Typography my={2}>N° REGISTER: {client?._id}</Typography>
        </Box>
        <AiFillCloseCircle
          className="buttonCloseModal"
          onClick={() => dispatch(closeModal())}
        />
      </Box>
    </Modal>
  );
};

export default ModalData;
