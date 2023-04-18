import { useAppSelector, useAppDispatch } from "../../redux/hooks/hooks";
import { closeModal } from "../../redux/slices/client.Slice";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { styles } from "./styles";
import { AiFillCloseCircle } from "react-icons/ai";
import { Box } from "@mui/material";

const ModalData = () => {
  const dispatch = useAppDispatch();
  const client = useAppSelector((state) => state.clients.selectedClient);
  const stateModal = useAppSelector((state) => state.clients.isModalOpen);

  return (
    <Modal open={stateModal}>
      <Box sx={styles.boxModal}>
        <Typography variant="h5" my={2} textAlign={"center"}>
          Information of the Patient
        </Typography>
        <Box my={2}>
          <Typography>Name: {client?.name}</Typography>
          <Typography>Address: {client?.address}</Typography>
          <Typography>Document: {client?.document}</Typography>
          <Typography>Phone: {client?.phone}</Typography>
        </Box>
        <AiFillCloseCircle
          style={styles.buttonCloseModal}
          onClick={() => dispatch(closeModal())}
        />
      </Box>
    </Modal>
  );
};

export default ModalData;
