// HomeScreen.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../utils/redux/reducer";
import { Link, useNavigate } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import CardComp from "./Card";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <Box sx={{ padding: 2 }}>
      {news.length > 0 && (
        <Grid container spacing={2}>
          {news.map((item, index) => (
            <Grid key={index} item xs={12} md={6} lg={3}>
              <CardComp item={item} title={item.title} authore={item.authore} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default HomeScreen;
