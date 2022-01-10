import {
  Button,
  Card,
  TextField,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import CardContent from "@mui/material/CardContent";

const Home = () => {
  const [meals, setMeals] = useState([]);
  const [query, setQuery] = useState(null);

  const url = process.env.REACT_APP_URL;

  const getMeals = (q) => {
    
    return fetch(`${url}s=${q}`)
      .then((res) => res.json())
      .then((res) => setMeals(res.meals));
  };

  return (
    <Stack direction="column" sx={{ width: "30%", margin: "auto" }} spacing={3}>
      <h2>SEARCH FOR YOUR FAVOURITE CUISINES</h2>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="contained" onClick={() => getMeals(query)}>
        SEARCH
      </Button>

      {meals?.map((item) => (
        <Card>
          <CardHeader title={item.strMeal} subheader={item.strCategory} />
          <CardMedia
            component="img"
            height="194"
            image={item.strMealThumb}
            alt={item.strMeal}
          />

          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {item.strInstructions}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
};

export default Home;
