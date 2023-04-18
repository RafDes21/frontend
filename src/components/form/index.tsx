import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { addClient, updateClient } from "../../redux/thunks/thunksClients";
import { AddClient } from "../../redux/interface";

const Form = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const [data, setData] = React.useState<AddClient>({
    name: "",
    document: "",
    address: "",
    phone: "",
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

  return (
    <Container maxWidth="sm" sx={{ marginTop: "90px" }}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item>
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
      </Grid>
    </Container>
  );
};

export default Form;
