import { useEffect } from "react";
import { TableBody, TableCell, TableRow } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { useAppSelector, useAppDispatch } from "../../redux/hooks/hooks";

import { ImInfo } from "react-icons/im";
import { BiEdit } from "react-icons/bi";

import { useNavigate } from "react-router-dom";
import { toggleClientId, openModal } from "../../redux/slices/client.Slice";
import {
  fetchClientById,
  fetchClients,
} from "../../redux/thunks/thunksClients";

import "./item.css";

export const Item = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const searchPatient = useAppSelector((state) => state.clients.filter);

  const clients = useAppSelector((state) => state.clients.clients);

  const selectPatient = clients.filter((patient) =>
    patient.name.toLocaleLowerCase().includes(searchPatient.toLocaleLowerCase())
  );

  const toggleSelectClient = (id: string, checked: boolean) => {
    dispatch(toggleClientId({ id, checked }));
  };

  const handleModal = (id: string) => {
    dispatch(fetchClientById(id));
    dispatch(openModal());
  };

  const handleChange = async (id: string) => {
    await dispatch(fetchClientById(id));
    navigate(`/addClient/${id}`);
  };

  useEffect(() => {
    dispatch(fetchClients());
  }, [dispatch]);

  return (
    <TableBody>
      {selectPatient.map((item, index) => (
        <TableRow
          key={index}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell sx={{ textAlign: "center" }}>
            <Checkbox
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                toggleSelectClient(item._id, event.target.checked);
              }}
            />
          </TableCell>
          <TableCell component="th" scope="row" sx={{ textAlign: "center" }}>
            {item.name}
          </TableCell>
          <TableCell sx={{ textAlign: "center" }}>{item.address}</TableCell>
          <TableCell sx={{ textAlign: "center" }}>{item.document}</TableCell>
          <TableCell sx={{ textAlign: "center" }}>{item.phone}</TableCell>
          <TableCell sx={{ textAlign: "center" }}>
            <ImInfo
              className="iconInfo"
              onClick={() => {
                handleModal(item._id);
              }}
            />
          </TableCell>
          <TableCell sx={{ textAlign: "center" }}>
            <BiEdit
              className="iconEdit \>"
              onClick={() => handleChange(item._id)}
            />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
