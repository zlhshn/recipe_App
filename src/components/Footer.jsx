import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import logo from "../assets/img/tabak.png";
import { Stack } from "@mui/material";

export default function Footer() {
  return (
    <Box
      height={"20vh"}
      bgcolor={"#f7ede2"}
      textAlign={"center"}
      padding={"2rem"}
    >
      <Stack
        bgcolor={"#f7ede2"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        margin={"auto"}
      >
        <img src={logo} alt="" width={"150px"} height={"150px"}/>
        <div>
          <InstagramIcon fontSize="large" />
          <FacebookIcon fontSize="large" />
          <TwitterIcon fontSize="large" />
        </div>
        <Typography bgcolor={"#f7ede2"} padding={"2rem"}>
          © copyright by zlhshn 2024
        </Typography>
      </Stack>
    </Box>
  );
}
