import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography"
import { Table, TableCell, TableRow } from "@mui/material";

import { Item } from "./Item";
import AutoComplete from "../autoComplete";

import { useAppSelector, useAppDispatch } from "../../redux/hooks/hooks";
import { deleteClients, fetchClients } from "../../redux/thunks/thunksClients";
import {useEffect} from "react"
import { toggleClientIdClear } from "../../redux/slices/client.Slice";


const ListClients = () => {
 
  const dispatch = useAppDispatch()
  const selectClientsByIds = useAppSelector(
    (state) => state.clients.selectedClientIds
  );


  const handleClients = async() => {
    await deleteClients(selectClientsByIds);
    await dispatch(fetchClients());
    dispatch(toggleClientIdClear([]));
   
  };
  useEffect(() => {
  }, [handleClients]);
 

  return (
    <Container>
      <AutoComplete/>
      <TableContainer component={Paper}>
        <Typography align="center" variant="h4" color="primary">LISTA DE CLIENTES</Typography>
        <Table sx={{ minWidth: 360 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell onClick={handleClients}><Typography sx={{color:"#F52A05", cursor:"pointer"}}>ELIMINAR</Typography></TableCell>
              <TableCell>NAME</TableCell>
              <TableCell>ADDRESS</TableCell>
              <TableCell>DOCUMENT</TableCell>
              <TableCell>PHONE</TableCell>
              <TableCell>INFO</TableCell>
              <TableCell>EDIT</TableCell>
            </TableRow>
          </TableHead>
          <Item />
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ListClients;
