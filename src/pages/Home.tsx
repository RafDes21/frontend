import Container from "@mui/material/Container";
import { ListClients, ModalData, Search } from "../components";

const Home = () => {
  return (
    <Container sx={{ paddingTop: " 150px" }}>
      <Search />
      <ModalData />
      <ListClients />
    </Container>
  );
};

export default Home;
