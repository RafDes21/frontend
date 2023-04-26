import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import {
  addClient,
  fetchClients,
  updateClient,
} from "../../redux/thunks/thunksClients";
import { AddClient } from "../../redux/interface";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { toast } from "react-toastify";
import room from "../../assets/room.jpg";
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
  const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
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
    <Box sx={{ marginTop: "60px", maxHeight: "600px", display: "flex" }}>
      <Grid container>
        <Grid item xs={12} sm={6} display={"flex"} alignItems={"center"} p={2}>
          <Paper sx={{ px: 4, borderRadius: "8px" }}>
            <Typography sx={{ my: 4 }} align="center" color="primary">
              {isEditMode ? "EDITED DATA" : "ADD NEW CLIENT"}
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>
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
            </Box>
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          display={"flex"}
          justifyContent={"center"}
          height={"100%"}
          py={2}
        >
          <img
            src={room}
            style={{ width: "100%", objectFit: "cover" }}
            alt="consultingRoom"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Form;
