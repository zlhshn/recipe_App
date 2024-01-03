import Box from "@mui/material/Box";
import BackImg from "../assets/img/img4.jpg";
import { Avatar, Container, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import rsm1 from "../assets/img/img8.png";
import rsm2 from "../assets/img/img.png";
import Footer from "../components/Footer";

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        component={"div"}
        sx={{
          backgroundColor: "#F2EEAE",
          // backgroundImage: `url(${BackImg})`,
          textAlign: "center",
          height: "80vh",
          // backgroundSize: "cover",
          // backgroundPosition: "right",
          // backgroundRepeat: "no-repeat",
          // objectFit: "cover",
          // width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Stack
          flexWrap={"wrap"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"2rem"}
        >
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
            fontWeight={"900"}
            color={"#BF5E70"}
            flexWrap={"wrap"}
          >
            Discover delicious and enjoyable recipes with us{" "}
          </Typography>

          <div>
            <Stack flexDirection={"row"} gap={"2rem"}>
              <Button
                onClick={() => navigate("/login")}
                variant="contained"
                width="300px"
              >
                SİGN İN
              </Button>
              <Button onClick={() => navigate("/register")} variant="outlined">
                SİGN UP
              </Button>
            </Stack>
          </div>
        </Stack>
        <img src={rsm1} width={"430px"} height={"430px"} />
      </Box>
      <Box
        sx={{
          height: "50vh",
          backgroundColor: "#FFCB9A",
          backgroundSize: "cover",
        }}
      >
        <Stack
          padding={"2rem"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"5rem"}
          flexDirection={"row"}
        >
          <img src={rsm2} width={"330px"} height={"330px"} />
          <Typography
            component={"h1"}
            variant="h3"
            fontWeight={"500"}
            color={"#13678A"}
          >
            Search and find your favorite food
          </Typography>
        </Stack>
        <Footer />
      </Box>
    </>
  );
};

export default Main;
