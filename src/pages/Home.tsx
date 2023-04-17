import List from "../components/List";
import Container from "@mui/material/Container";
import CompModal from "../components/Modal";

const Home: React.FC = () => {


  return (
    <Container sx={{ paddingTop: " 150px" }}>
      <CompModal />
      <List />
    </Container>
  );
};

export default Home;
