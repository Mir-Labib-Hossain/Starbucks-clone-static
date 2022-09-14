import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material";
import React from "react";
const CardItem: React.FC<{ img: string }> = ({ img }) => {
  // checkbox love
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <Card sx={{ maxWidth: 345, margin:"20px 5px" }} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#E6C342" }} aria-label="recipe">
            MC
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia component="img" height={"auto"} image={img} alt="Coffee" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox {...label} color="error" icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default CardItem;
