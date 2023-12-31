import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Grid, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";
import { SetMeal } from "@mui/icons-material";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [meal,setMeal] = useState("")

  const API_ID = process.env.REACT_APP_API_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;
 

  const URL = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${API_ID}&app_key=${API_KEY}&mealType=${meal}`;

  const searchFood = async () => {
    try {
      const res = await axios(URL);
      setRecipes(res.data.hits);
    
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    searchFood();
  });

  const mealTy = [
    {
      value: "breakfast",
    
    },
    {
      value: "brunch",
    },
    {
      value: "lunch/dinner",
    },
    {
      value: "snack",
    },
    {
      value: "teatime",
    }
  ];

  return (
    <>
      <Stack
        flexDirection={"row"}
        gap={"2rem"}
        margin={"3rem"}
        justifyContent={"center"}
      >
        <div>
          <TextField
            id="standard-basic"
            label="Search"
            variant="standard"
            type="search"
          />
        </div>
        <div>
          <Button variant="outlined">Outlined</Button>
        </div>
        <div>
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            defaultValue="EUR"
            helperText="Please select your currency"
          >
            {mealTy.map((option) => (
              <MenuItem key={option.value} value={option.value} onChange={(e)=>setMeal(e.target.value)}>
                {option.value} 
              </MenuItem>
            ))}
          </TextField>
        </div>
      </Stack>

      <Grid container>
        {recipes?.map((data) => (
          <RecipeCard item key={data.recipe.label}  data={data} />
        ))}
      </Grid>
    </>
  );
};

export default Home;
