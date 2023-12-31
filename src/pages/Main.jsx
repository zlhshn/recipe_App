import Box from "@mui/material/Box";
import BackImg from "../assets/img/img5.jpg";
import { Container, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Main = () => {

  const navigate = useNavigate()
  return (
    <Container
      sx={{
        backgroundColor: "#EC8F5E",
        // backgroundImage: `url(${BackImg})`,
        height: "100vh",
        // backgroundSize: "cover",
        // backgroundPosition: "right",
        // backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Stack>
        <Typography
          component={"h1"}
          variant="h3"
          fontWeight={"700"}
          color={"rebeccapurple"}
        >
          Welcome to our page.
        </Typography>

        <Typography
          component={"h1"}
          variant="h3"
          fontWeight={"700"}
          color={"red"}
        >
          Discover delicious and enjoyable recipes with us{" "}
        </Typography>
      </Stack>
      <Stack flexDirection={"row"} gap={"2rem"}>
        <Button onClick={()=>navigate("/login")} variant="contained">SİGN İN</Button>
        <Button onClick={()=>navigate("/register")}  variant="outlined">SİGN UP</Button>
      </Stack>
    </Container>
  );
};

export default Main;
