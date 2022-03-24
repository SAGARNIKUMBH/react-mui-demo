import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
  Stack,
} from "@mui/material";
import { useState } from "react";

const MuiCard = () => {
  const [card, setCard] = useState([]);
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={4}
    >
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDISJF2ZH9KHtiSUtbHnG_gyTjAx9k3uBtYw&usqp=CAU"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            vitae reiciendis voluptatem, eos eum laborum facilis modi tempora,
            dignissimos animi culpa perferendis quae veniam error accusantium
            rerum ipsa sunt neque.
          </Typography>
        </CardContent>
        <CardActions></CardActions>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDISJF2ZH9KHtiSUtbHnG_gyTjAx9k3uBtYw&usqp=CAU"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            vitae reiciendis voluptatem, eos eum laborum facilis modi tempora,
            dignissimos animi culpa perferendis quae veniam error accusantium
            rerum ipsa sunt neque.
          </Typography>
        </CardContent>
        <CardActions></CardActions>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDISJF2ZH9KHtiSUtbHnG_gyTjAx9k3uBtYw&usqp=CAU"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            vitae reiciendis voluptatem, eos eum laborum facilis modi tempora,
            dignissimos animi culpa perferendis quae veniam error accusantium
            rerum ipsa sunt neque.
          </Typography>
        </CardContent>
        <CardActions></CardActions>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDISJF2ZH9KHtiSUtbHnG_gyTjAx9k3uBtYw&usqp=CAU"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            vitae reiciendis voluptatem, eos eum laborum facilis modi tempora,
            dignissimos animi culpa perferendis quae veniam error accusantium
            rerum ipsa sunt neque.
          </Typography>
        </CardContent>
        <CardActions></CardActions>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Stack>
  );
};

export default MuiCard;
