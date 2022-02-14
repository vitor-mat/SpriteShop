import { v4 as uuidv4 } from 'uuid';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { useDispatch } from 'react-redux';
import { addProduct } from '../../features/cartSlice';

export const SpriteCard = ({ title, imgSrc, price }: any) => {

  const dispatch = useDispatch()

  const handleAddCartProduct = ( t: string, p: string) => {
    
    const obj = {
      id: uuidv4(),
      title: t,
      price: p
    }

    dispatch(addProduct(obj))
  }

  return (
    <Card sx={{ minWidth: 275, height: 350 }} variant="outlined">
      <CardMedia
        component="img"
        height="180"
        image={imgSrc}
        alt="Ninja.png"
      />
      <CardContent>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            mb: 2,
            alignItems: "flex-end",
            justifyContent: "center",
            gap: 2,
            borderBottom: ".5px solid gray",
            paddingBottom: 2
          }}
        >
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography color="text.secondary">
            {`${price} $`}
          </Typography>
        </Box>
      </CardContent>
      <CardActions
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Button
          variant="contained"
          sx={{
            alignSelf: "flex-end"
          }}
          onClick={() => handleAddCartProduct(title, price)}
        >
          Add
        </Button>
      </CardActions>
    </Card>
  )
}