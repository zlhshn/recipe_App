import Box from "@mui/material/Box";
import BackImg from "../assets/img/img4.jpg";
import { Avatar, Container, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import {tbk} from "../assets/img/tabak.png"


const Main = () => {
  const navigate = useNavigate();
  return (
    <Box
      component={"div"}
      sx={{
        backgroundColor: "#EC8F5E",
        // backgroundImage: `url(${BackImg})`,
        textAlign:"center",
        height: "60vh",
        // backgroundSize: "cover",
        // backgroundPosition: "right",
        // backgroundRepeat: "no-repeat",
        // objectFit: "cover",
        // width: "100%",
      }}
    >
      <Stack flexWrap={"wrap"} justifyContent={"center"} alignItems={"center"}>
        <Avatar src="../assets/img/tabak.png">


        </Avatar>
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
          flexWrap={"wrap"}
        >
          Discover delicious and enjoyable recipes with us{" "}
        </Typography>

        <div>
          <Stack flexDirection={"row"} gap={"2rem"}>
            <Button onClick={() => navigate("/login")} variant="contained">
              SİGN İN
            </Button>
            <Button onClick={() => navigate("/register")} variant="outlined">
              SİGN UP
            </Button>
          </Stack>
        </div>
      </Stack>
    </Box>
  );
};

export default Main;
