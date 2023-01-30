import React from "react";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography"
import { Table, TableCell, TableRow } from "@mui/material";
import { Item } from "./Item";
import { useAppSelector, useAppDispatch } from "../redux/hooks/hooks";
import { deleteClientsByIds } from "../redux/thunks/thunksClients";
import AutoComplete from "./AutoComplete";


const List: React.FC<{}> = () => {
  const selectedclientsId = useAppSelector(
    (state) => state.clients.selectedClientIds
  );

  const dispatch = useAppDispatch();

  const eliminarClientes = () => {
    dispatch(deleteClientsByIds(selectedclientsId));
  };

  return (
    <Container>
      <AutoComplete/>
      <TableContainer component={Paper}>
        <Typography align="center" variant="h4" color="primary">LISTA DE CLIENTES</Typography>
        <Table sx={{ minWidth: 360 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell onClick={eliminarClientes}><Typography sx={{color:"#F52A05", cursor:"pointer"}}>ELIMINAR</Typography></TableCell>
              <TableCell>NOMBRE</TableCell>
              <TableCell>DIRECCION</TableCell>
              <TableCell>DOCUMENTO</TableCell>
              <TableCell>TELEFONO</TableCell>
              <TableCell>INFO</TableCell>
            </TableRow>
          </TableHead>
          <Item />
        </Table>
      </TableContainer>
    </Container>
  );
};

export default List;
