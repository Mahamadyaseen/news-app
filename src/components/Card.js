import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { newsData } from "../utils/redux/reducer";

export default function CardComp(props) {
  const { item, title, author } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clickHandler = () => {
    dispatch(newsData(item));
    navigate("/details");
  };
  return (
    <Card xs={12} md={6} lg={3} sx={{ minHeight: 400 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://media.wired.com/photos/6480c4940a0f9ed43773f08f/3:2/w_1280,c_limit/Old_Building_2.jpg"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ maxHeight: 150, overflow: "hidden" }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {author}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => clickHandler()} size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
