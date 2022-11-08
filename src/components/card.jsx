import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 300}}>
      <CardMedia
        component="img"
        height="250"
        image={props.img}
        alt="green iguana"
      />
      <CardContent component="section">
        <Typography gutterBottom variant="h5" component="h2">
          Titulo
        </Typography>
        <Typography variant="body3" color="text.secondary">
          Lizards are a widespread group of squamate reptiles.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}