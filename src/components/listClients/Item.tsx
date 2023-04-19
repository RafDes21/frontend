import { useEffect } from "react";
import { TableBody, TableCell, TableRow } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { useAppSelector, useAppDispatch } from "../../redux/hooks/hooks";

import { ImInfo } from "react-icons/im";
import { BiEdit } from "react-icons/bi";

import { useNavigate } from "react-router-dom";
import { toggleClientId, openModal } from "../../redux/slices/client.Slice";
import { fetchClientById, fetchClients } from "../../redux/thunks/thunksClients";

import "./item.css";

export const Item = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const clients = useAppSelector((state) => state.clients.clients);

  const toggleSelectClient = (id: string, checked: boolean) => {
    dispatch(toggleClientId({ id, checked }));
  };

  const handleModal = (id: string) => {
    dispatch(fetchClientById(id));
    dispatch(openModal());
  };

  const handleChange = (id: string) => {
    navigate(`/addClient/${id}`);
  };

  useEffect(() => {
    dispatch(fetchClients());
  }, []);

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
            {item.name}
          </TableCell>
          <TableCell>{item.address}</TableCell>
          <TableCell>{item.document}</TableCell>
          <TableCell>{item.phone}</TableCell>
          <TableCell>
            <ImInfo
              className="iconInfo"
              onClick={() => {
                handleModal(item._id);
              }}
            />
          </TableCell>
          <TableCell>
            <BiEdit className="iconEdit" onClick={() => handleChange(item._id)} />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
