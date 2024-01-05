import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Box, FormControl, Grid, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";
import Pagination from "@mui/material/Pagination";
import { Container } from "@mui/material";
import loadingImg from "../assets/img/loading.gif";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [meal, setMeal] = useState("Breakfast"); // Make sure the initial meal type matches the options
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [nextPageLink, setNextPageLink] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_ID = process.env.REACT_APP_API_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;
  let requestUrl = `https://api.edamam.com/search?q=${search}&app_id=${API_ID}&app_key=${API_KEY}&mealType=${meal}&from=${
    (currentPage - 1) * 10
  }&to=${currentPage * 10}`;
  const searchFood = async () => {
    setLoading(true);
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
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    setRecipes([]);
    searchFood();
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
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
    <Box bgcolor={"#E5E0FF"}>
      {loading ? (
        <Box
          height={"100vh"}
          textAlign={"center"}
          margin={"auto"}
          paddingTop={"3rem"}
        >
          {" "}
          <img src={loadingImg} width={"80px"} height={"80px"} />
        </Box>
      ) : (
        <Box sx={{ textAlign: "center", paddingX: "10rem" }}>
          <form onSubmit={handleSubmit}>
            <Stack
              flexDirection={"row"}
              gap={"2rem"}
              padding={"3rem"}
              justifyContent={"center"}
              alignItems="flex-end"
              sx={{ flexWrap: "wrap" }}
            >
              <div>
                <TextField
                  id="standard-basic"
                  label="Search"
                  variant="standard"
                  type="search"
                  value={search}
                  sx={{
                    width: {
                      xs: "200px", // Ekran boyutu < 600px
                    },
                  }}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <div>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Select"
                  value={meal}
                  onChange={(e) => setMeal(e.target.value)}
                  size="small"
                  sx={{
                    width: {
                      xs: "200px", // Ekran boyutu < 600px
                    },
                  }}
                >
                  {mealTy.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div>
                <Button variant="contained" type="submit" size="large">
                  Search
                </Button>
              </div>
            </Stack>
            <Grid container spacing={3} justifyContent="center" alignItems={"center"}>
              {recipes.map((data) => (
                <Grid item xs={12} sm={6} md={4} lg={3} minWidth={"300px"}>
                  <RecipeCard key={data.recipe.label} data={data} />
                </Grid>
              ))}
            </Grid>
          </form>
          <Stack padding={"3rem"} flexDirection={"row"} justifyContent="center">
            <Pagination
              count={10}
              color="secondary"
              page={currentPage}
              onChange={handlePageChange}
            />
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Home;
