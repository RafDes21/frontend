import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import {
  addClient,
  fetchClients,
  updateClient,
} from "../../redux/thunks/thunksClients";
import { AddClient } from "../../redux/interface";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { toast } from "react-toastify";
import "./styles.css";
import { filterClient } from "../../redux/slices/client.Slice";

const Form = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const client = useAppSelector((state) => state.clients.selectedClient);

  const [formData, setFormData] = React.useState<AddClient>({
    name: client ? client.name : "",
    document: client ? client.document : "",
    address: client ? client.address : "",
    phone: client ? client.phone : "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      await updateClient(id, formData);
      await dispatch(fetchClients());
      dispatch(filterClient(""));
      navigate("/");
      toast.success("Client update...");
    } else {
      addClient(formData);
      await dispatch(fetchClients());
      toast.success("Add Client!");
      navigate("/");
    }
  };

  useEffect(() => {
    if (!id) {
      setFormData({
        name: "",
        document: "",
        address: "",
        phone: "",
      });
    }
  }, [id]);

  const isEditMode = Boolean(id);

  return (
    <Box>
      <Typography sx={{ my: 4 }} align="center" color="primary">
        {isEditMode ? "EDITED DATA" : "ADD NEW CLIENT"}
      </Typography>

      <Paper component="form" onSubmit={handleSubmit} sx={{p:5}}>
        <TextField
          fullWidth
          variant="standard"
          name="name"
          label="Name"
          value={formData.name}
          sx={{ my: 2 }}
          required
          onChange={handleInputChange}
        />
        <TextField
          fullWidth
          variant="standard"
          name="document"
          value={formData.document}
          label="DNI"
          sx={{ my: 2 }}
          required
          onChange={handleInputChange}
        />
        <TextField
          fullWidth
          variant="standard"
          name="address"
          label="address"
          sx={{ my: 2 }}
          value={formData.address}
          required
          onChange={handleInputChange}
        />
        <TextField
          fullWidth
          variant="standard"
          name="phone"
          label="phone"
          sx={{ my: 2 }}
          required
          value={formData.phone}
          onChange={handleInputChange}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="success"
          sx={{ my: 2 }}
        >
          {isEditMode ? "Update" : "Add Client"}
        </Button>
      </Paper>
    </Box>
  );
};

export default Form;
