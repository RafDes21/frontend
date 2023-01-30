import React, { useEffect } from "react";
import List from "../components/List";
import Container from "@mui/material/Container";
import { useAppDispatch } from "../redux/hooks/hooks";
import { getClients } from "../redux/thunks/thunksClients";
import CompModal from "../components/Modal";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getClients());
  }, [dispatch]);

  return (
    <Container sx={{ paddingTop: " 150px" }}>
      <CompModal />
      <List />
    </Container>
  );
};

export default Home;
