import { Box, Container, Link } from "@mui/material";
import { BsFacebook, BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <Container
      maxWidth={false}
      sx={{ bgcolor: "#023e8a", height: "200px", marginTop: 5}}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={5}
        height={"100%"}

      >
        <Link
          href="https://github.com/RafDes21"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub fontSize={24} color="#f1f1f1"/>
        </Link>
        <Link
          href="https://www.facebook.com/israel.tineo.589"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook fontSize={24} color="#f1f1f1"/>
        </Link>
        <Link
          href="https://api.whatsapp.com/send?phone=541122521870"
          target="_blank"
          rel="noreferrer"
        >
          <BsWhatsapp fontSize={24} color="#f1f1f1"/>
        </Link>
        <Link
          href="https://www.linkedin.com/in/israelfrontend"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin fontSize={24} color="#f1f1f1" />
        </Link>
      </Box>
    </Container>
  );
};

export default Footer;
