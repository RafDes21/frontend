import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../assets/logo.png";

const Navbar: React.FC<{}> = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <Container>
            <Grid
              container
              justifyContent="space-between"
              alignItems={"center"}
            >
              <Grid item>
                <Link className="nav-item" to={"/"}>
                  <img className="navbarLogo" src={logo} />
                </Link>
              </Grid>
              <Grid item>
                <Link className="nav-item" to={"/addClient"} >
                  <AiOutlineUserAdd />
                  New Patient
                </Link>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
