import React from "react";
import { Link } from "react-router-dom";
import { Box, AppBar, Toolbar, Container } from "@mui/material";
import { AiOutlineUserAdd } from "react-icons/ai";
import logo from "../assets/logo.png";
import "./navbar.css";

const Navbar: React.FC<{}> = () => {
  return (
    <AppBar position="fixed" sx={{bgcolor:"#023e8a"}}>
      <Toolbar>
        <Container>
          <Box
            display={"flex"}
            justifyContent="space-between"
            alignItems={"center"}
          >
            <Link className="nav-item" to={"/"}>
              <img className="navbarLogo" src={logo} alt="dentist" />
            </Link>
            <Link className="nav-item" to={"/addClient"}>
              <AiOutlineUserAdd />
              New Patient
            </Link>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
