import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import { Container } from "@mui/system";
import React from "react";
import {Link} from "react-router-dom"
import "./navbar.css"

const Navbar: React.FC<{}> = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
            <Container>
                <Grid container  justifyContent="space-between">
                    <Grid item><Link className="nav-item" to={'/'}>Home</Link></Grid>            
                    <Grid item><Link className="nav-item" to={'/agregar'}>Agregar Cliente</Link></Grid>
                </Grid>
            </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
