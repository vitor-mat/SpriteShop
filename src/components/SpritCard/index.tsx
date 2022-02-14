import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const SpriteCard = ({ title, imgSrc, price}: any) => {
  return (
    <Card sx={{ minWidth: 275, height: 400 }} variant="outlined">
      <CardMedia
        component="img"
        height="180"
        image={imgSrc}
        alt="Ninja.png"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
    </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {`${price} $`}
    </Typography>
        <TextField
          id="standard-number"
          label="Quantidade"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
      </CardContent>
      <CardActions>
        <Button variant="contained">Add</Button>
      </CardActions>
    </Card>
  )
}