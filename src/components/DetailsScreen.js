// DetailsScreen.js
import { Box, Grid, Typography, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import { CardActionArea } from "@mui/material";

const DetailsScreen = () => {
  const newsItem = useSelector((state) => state.news.newsData);
  console.log(newsItem);
  const navigate = useNavigate();

  return (
    <Grid
      container
      padding={3}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ height: "100vh" }}
    >
      <Card xs={12} md={6}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://media.wired.com/photos/6480c4940a0f9ed43773f08f/3:2/w_1280,c_limit/Old_Building_2.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Author : {newsItem.author}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {newsItem.title}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => navigate(-1)} size="small">
              {`<<< Go back`}
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default DetailsScreen;
