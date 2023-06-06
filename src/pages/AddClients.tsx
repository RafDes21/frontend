import { Container } from "@mui/system";
import React from "react";
import { Form, ImageComp } from "../components";
import { Grid } from "@mui/material";

const Clients: React.FC<{}> = () => {
  return (
    <Container sx={{mt:5}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Form />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ImageComp />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Clients;
