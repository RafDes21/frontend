import List from "../components/listClients";
import Container from "@mui/material/Container";
import { ListClients, ModalData } from "../components";

const Home = () => {
  return (
    <Container sx={{ paddingTop: " 150px" }}>
      <ModalData />
      <ListClients />
    </Container>
  );
};

export default Home;
