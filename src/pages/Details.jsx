import { Card, CardMedia, Stack, Typography, Box } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const data = location.state;
  const {
    image,
    label,
    dishType,
    cuisineType,
    ingredientLines,
    totalNutrients: { FAT, CHOCDF, CHOLE, PROCNT, NA, CA, MG },
  } = data;
  console.log(data);

  return (
    <Box height={"auto"}>
      <Stack
        padding={3}
        sx={{
          width: "80%",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.4)",
          marginTop: "2rem",
          marginBottom: "2rem",
          borderRadius:"2rem"
        }}
        justifyContent={"center"}
        alignItems={"center"}
        margin={"auto"}
      >
        <Stack flexDirection={"row"} sx={{ width: "100%" }}>
          <CardMedia
            component="img"
            height="350px"
            sx={{ width: "50%", borderRadius: "2rem" }}
            image={image}
            alt={label}
          />
          <Box sx={{ width: "50%", marginLeft: "3rem" }}>
            <Typography
              variant="h4"
              marginBottom={"2rem"}
              color={"plum"}
              fontWeight={"bold"}
              fontStyle={"italic"}
            >
              {label}
            </Typography>
            <Typography
              paddingBottom={"1rem"}
              fontWeight={"bold"}
              color={"lightgreen"}
            >
              DishType :
              <Typography variant="span" color="#494545">
                {dishType}
              </Typography>
            </Typography>
            <Typography
              marginBottom={"1rem"}
              fontWeight={"bold"}
              color={"lightgreen"}
            >
              CuisineType :
              <Typography variant="span" color="#494545">
                {cuisineType}
              </Typography>
            </Typography>
          </Box>
        </Stack>
        <Stack
          flexDirection={"row"}
          sx={{ width: "100%" }}
          justifyContent={"space-between"}
          padding={"1rem"}
        >
          <Box sx={{ width: "50%" }}>
            <Typography variant="h5" paddingBottom={"1rem"} color={"purple"}>
              Ingredients
            </Typography>

            {ingredientLines.map((item) => (
              <Typography>{item}</Typography>
            ))}
          </Box>
          <Box sx={{ width: "50%" }}>
            <Typography variant="h5" paddingBottom={"1rem"} color={"purple"}>
              Nutrients
            </Typography>
            <Typography variant="body1">
              Total Fat: {FAT.quantity.toFixed(2)} {FAT.unit}
            </Typography>
            <Typography variant="body1">
              Carbohydrates: {CHOCDF.quantity.toFixed(2)} {CHOCDF.unit}
            </Typography>
            <Typography variant="body1">
              Cholesterol: {CHOLE.quantity.toFixed(2)} {CHOLE.unit}
            </Typography>
            <Typography variant="body1">
              Protein: {PROCNT.quantity.toFixed(2)} {PROCNT.unit}
            </Typography>
            <Typography variant="body1">
              Sodium: {NA.quantity.toFixed(2)} {NA.unit}
            </Typography>
            <Typography variant="body1">
              Calcium: {CA.quantity.toFixed(2)} {CA.unit}
            </Typography>
            <Typography variant="body1">
              Magnesium: {MG.quantity.toFixed(2)} {MG.unit}
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Details;
