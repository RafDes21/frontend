import {
  TableContainer,
  Table,
  TableCell,
  TableRow,
  TableHead,
  Paper,
  Container,
  Typography,
} from "@mui/material";
import { Item } from "./Item";
import { useAppSelector, useAppDispatch } from "../../redux/hooks/hooks";
import { deleteClients, fetchClients } from "../../redux/thunks/thunksClients";
import { toggleClientIdClear } from "../../redux/slices/client.Slice";

const ListClients = () => {
  const dispatch = useAppDispatch();
  const selectClientsByIds = useAppSelector(
    (state) => state.clients.selectedClientIds
  );

  const handleClients = async () => {
    await deleteClients(selectClientsByIds);
    await dispatch(fetchClients());
    dispatch(toggleClientIdClear([]));
  };

  return (
    <Container>
      <TableContainer component={Paper}>
        <Typography align="center" variant="h4" color="primary" my={5}>
          PATIENTS LIST
        </Typography>
        <Table sx={{ minWidth: 360 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ textAlign: "center", fontWeight: "bold" }}
                onClick={handleClients}
              >
                <Typography sx={{ color: "#F52A05", cursor: "pointer" }}>
                  DELETE
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>
                NAME
              </TableCell>
              <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>
                ADDRESS
              </TableCell>
              <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>
                DOCUMENT
              </TableCell>
              <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>
                PHONE
              </TableCell>
              <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>
                INFO
              </TableCell>
              <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>
                EDIT
              </TableCell>
            </TableRow>
          </TableHead>
          <Item />
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ListClients;
