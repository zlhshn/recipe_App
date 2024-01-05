import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import logo from "../assets/img/tabak.png";
import { Stack } from "@mui/material";

export default function Footer() {
  return (
    <Box  bgcolor={"#F2F1EB"}>
      <Box
        // height={"20vh"}
        bgcolor={"#F2F1EB"}
        textAlign={"center"}
        padding={"2rem"}
      >
        <Stack
          bgcolor={"#F2F1EB"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
          margin={"auto"}
        >
          <img src={logo} alt="" width={"150px"} height={"150px"} />
          <Box  bgcolor={"#F2F1EB"}>
            <InstagramIcon fontSize="large" />
            <FacebookIcon fontSize="large" />
            <TwitterIcon fontSize="large" />
          </Box>
          <Typography bgcolor={"#F2F1EB"} >
            © Copyright by zlhshn 2024
          </Typography>
        </Stack>
      </Box>

      {/* <>
        <Stack
          direction="column"
          position="fixed"
          bottom="20rem"
          left="2rem"
          spacing={2}
          color="black"
        >
          <TwitterIcon
            sx={{
              fontSize: "2rem",
              "&:hover": { color: "#88BF6F", fontSize: "3rem" },
              transition: "all 1s",
            }}
          />
          <FacebookIcon
            sx={{
              fontSize: "2rem",
              "&:hover": { color: "#88BF6F", fontSize: "3rem" },
              transition: "all 1s",
            }}
          />
          <InstagramIcon
            sx={{
              fontSize: "2rem",
              "&:hover": { color: "#88BF6F", fontSize: "3rem" },
              transition: "all 1s",
            }}
          />
        </Stack>
        <Box
          position="fixed"
          bottom="8rem"
          left="2rem"
          sx={{ writingMode: "vertical-rl" }}
          color="black"
        >
          &copy; Copyright 2024
        </Box>
      </> */}
    </Box>
  );
}
