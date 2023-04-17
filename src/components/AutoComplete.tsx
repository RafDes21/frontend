import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import { useAppSelector } from "../redux/hooks/hooks";
import { useNavigate } from "react-router-dom";

interface Client {
  id: string;
  label: string;
}

const AutoComplete: React.FC<{}> = () => {
  const navigate = useNavigate();
  const listClients = useAppSelector((state) => state.clients.clients);
  const [dataClient, setDataClient] = useState<Client | null>(null);

  const clients = listClients.map((client) => ({
    id: client._id,
    label: client.name,
  }));

  const handleChange = (event: any, newValue: Client | null) => {
    setDataClient(newValue);
    const id = newValue?.id;
    navigate(`/actualizar/${id}`);
  };

  return (
    <Stack sx={{ marginBottom: "40px" }}>
      <Autocomplete
        options={clients}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="clientes" />}
        value={dataClient}
        onChange={handleChange}
      />
    </Stack>
  );
};

export default AutoComplete;
