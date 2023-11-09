import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  Checkbox,
} from "@mui/material";
const Post = () => {
  return (
    <Card sx={{ margin: 3 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            MA
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon></MoreVertIcon>
          </IconButton>
        }
        title="Muhammad Abdullah"
        subheader="Updates his Profile Pic on September 14, 2016"
      />
      <CardMedia
        component="img"
        height="20%"
        image="/src/assets/palestine_silk.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorderIcon></FavoriteBorderIcon>}
            checkedIcon={<FavoriteIcon sx={{ color: "red" }}></FavoriteIcon>}
          ></Checkbox>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon></ShareIcon>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
