import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import {
  addClient,
  updateClient,
  fetchClientById,
} from "../../redux/thunks/thunksClients";
import { AddClient } from "../../redux/interface";
import room from "../../assets/room.jpg";
import "./styles.css";

const Form = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const client = useAppSelector((state) => state.clients.selectedClient);

  const [data, setData] = React.useState<AddClient>({
    name: client ? client.name : "",
    document: client ? client.document : "",
    address: client ? client.address : "",
    phone: client ? client.phone : "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (id) {
      updateClient(id, data);
      navigate("/");
      toast.success("Client update...");
    } else {
      addClient(data);
      toast.success("Add Client!");
      navigate("/");
    }
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchClientById(id));
    } else {
      setData({
        name: "",
        document: "",
        address: "",
        phone: "",
      });
    }
  }, [id]);

  return (
    <Grid container>
      <Grid xs={12} sm={6}>
        <Paper sx={{ padding: "10px", borderRadius: "8px" }}>
          {id ? (
            <Typography sx={{ mt: 1, mb: 1 }} align="center" color="primary">
              EDITED DATA
            </Typography>
          ) : (
            <Typography sx={{ mt: 1, mb: 1 }} align="center" color="primary">
              ADD NEW CLIENT
            </Typography>
          )}
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              name="name"
              label="Name"
              value={data.name}
              sx={{ mt: 2, mb: 1.5 }}
              required
              onChange={handleInputChange}
            />
            <TextField
              fullWidth
              name="document"
              value={data.document}
              label="DNI"
              sx={{ mt: 2, mb: 1.5 }}
              required
              onChange={handleInputChange}
            />
            <TextField
              fullWidth
              name="address"
              label="address"
              sx={{ mt: 2, mb: 1.5 }}
              value={data.address}
              required
              onChange={handleInputChange}
            />
            <TextField
              fullWidth
              name="phone"
              label="phone"
              sx={{ mt: 2, mb: 1.5 }}
              required
              value={data.phone}
              onChange={handleInputChange}
            />
            {id ? (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="success"
              >
                Update
              </Button>
            ) : (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="success"
              >
                Add Client
              </Button>
            )}
          </Box>
        </Paper>
      </Grid>
      <Grid xs={12} sm={6}>
        <img src={room} />
      </Grid>
    </Grid>
  );
};

export default Form;
