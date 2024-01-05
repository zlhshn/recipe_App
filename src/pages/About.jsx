import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Grid, Box } from "@mui/material";
import { data } from "../helpers/blog";
import Container from "@mui/material/Container";
import { NavLink } from "react-router-dom";

export default function About() {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Box bgcolor={"#F2ECCE"} padding={"2rem"}>
      <NavLink
        to={"/home"}
        style={{ paddingTop: "3rem", textDecoration: "none" }}
      >
        Home{" "}
      </NavLink>
      <span>&gt;</span>
      <NavLink to={"/blog"} style={{ textDecoration: "none" }}>
        Blog{" "}
      </NavLink>
      <Container>
        <Grid container spacing={3} padding={"4rem"} justifyContent="center">
          {data?.map(({ image, desc, date, name, avatar, renk }) => (
            <Grid item xs={12} sm={6} md={4} lg={3} minWidth={"300px"}>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  height={"4rem"}
                  avatar={
                    <Avatar sx={{ bgcolor: `${renk}` }} aria-label="recipe">
                      {avatar}
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={
                    <Typography
                      sx={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        WebkitLineClamp: "2",
                      }}
                    >
                      {name}
                    </Typography>
                  }
                  subheader={
                    <Typography
                      color={"gray"}
                      sx={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        WebkitLineClamp: "1",
                      }}
                    >
                      {date}
                    </Typography>
                  }
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={image}
                  alt={name}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      WebkitLineClamp: "5",
                    }}
                  >
                    {desc}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
