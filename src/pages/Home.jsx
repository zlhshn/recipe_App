import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { FormControl, Grid, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";
import Pagination from "@mui/material/Pagination";


const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [meal, setMeal] = useState("Breakfast"); // Make sure the initial meal type matches the options
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [nextPageLink, setNextPageLink] = useState(null);

  const API_ID = process.env.REACT_APP_API_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;

  const searchFood = async () => {
    let requestUrl = `https://api.edamam.com/search?q=${search}&app_id=${API_ID}&app_key=${API_KEY}&mealType=${meal}&from=${
      (currentPage - 1) * 10
    }&to=${currentPage * 10}`;

    try {
      const res = await axios(requestUrl);
      setRecipes(res.data.hits);
      setTotalPages(Math.ceil(res.data.count / 10));

      if (res.data._links.next) {
        setNextPageLink(res.data._links.next.href);
      } else {
        setNextPageLink(null);
      }

      // Remove the check for currentPage > totalPages
      // It's not necessary since you can have more pages after the current page
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    setRecipes([]);
    searchFood();
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    setRecipes([]);
    searchFood();
  };

  const mealTy = [
    { value: "Breakfast" },
    { value: "Brunch" },
    { value: "Lunch" },
    { value: "Snack" },
    { value: "Teatime" },
  ];

  useEffect(() => {
    searchFood();
  }, [currentPage]); // Include meal and search in the dependencies

  return (
    <>
      <form onSubmit={handleSubmit}>
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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div>
            <Button variant="outlined" type="submit">
              Outlined
            </Button>
          </div>
          <div>
            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              value={meal}
              onChange={(e) => setMeal(e.target.value)}
              helperText="Please select your meal"
            >
              {mealTy.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  <Typography>{option.value}</Typography>
                </MenuItem>
              ))}
            </TextField>
          </div>
        </Stack>

        <Grid container>
          {recipes.map((data) => (
            <RecipeCard key={data.recipe.label} data={data} />
          ))}
        </Grid>
      </form>

      <Stack spacing={2}>
        <Pagination
          count={totalPages}
          color="secondary"
          page={currentPage}
          onChange={handlePageChange}
        />
      </Stack>
    </>
  );
};

export default Home;