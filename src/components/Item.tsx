import React from "react";
import { TableBody, TableCell, TableRow } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { FiEye } from "react-icons/fi";
import { useAppSelector, useAppDispatch } from "../redux/hooks/hooks";
import { getClientById } from "../redux/thunks/thunksClients";
import { toggleClientId, updateStateModal } from "../redux/slices/clienteSlice";
import "./item.css";

interface Client {
  direccion: string;
  documento: string;
  nombre: string;
  telefono: string;
  _id: string;
}

export const Item: React.FC<{}> = () => {
  const dispatch = useAppDispatch();

  const clients: Client[] = useAppSelector((state) => state.clients.clients);
  const stateModal = useAppSelector((state) => state.clients.stateModal);

  const toggleSelectClient = (id: string, checked: boolean) => {
    dispatch(toggleClientId({ id, checked }));
  };

  const clientById = (id: string) => {
    dispatch(getClientById(id));
    dispatch(updateStateModal(!stateModal));
  };

  return (
    <TableBody>
      {clients.map((item, index) => (
        <TableRow
          key={index}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell>
            <Checkbox
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                toggleSelectClient(item._id, event.target.checked);
              }}
            />
          </TableCell>
          <TableCell component="th" scope="row">
            {item.nombre}
          </TableCell>
          <TableCell>{item.direccion}</TableCell>
          <TableCell>{item.documento}</TableCell>
          <TableCell>{item.telefono}</TableCell>
          <TableCell>
            <FiEye className="eyeItem" onClick={() => clientById(item._id)} />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
