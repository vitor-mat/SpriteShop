import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useDispatch } from 'react-redux';
import { removeProduct } from '../../features/cartSlice';

export const CartCard = ({ title, price, index }: any) => {

  const dispatch = useDispatch()


  const handleRemoveProductCart = (i: number) => {
    dispatch(removeProduct(i))
  }

  return (
    <Card 
      variant="outlined"
      sx={{
        width: "100%",
        height: 70,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
       }}
    >
      <CardContent
        sx={{
          width: "100%",
          height: 70,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
         }}
      >
        <Typography sx={{ fontSize: 20}}>
          {title}
        </Typography>
        <Typography sx={{ fontSize: 20 }}>
          {`${price}$`}
        </Typography>
        <Button
          size="small"
          onClick={() => handleRemoveProductCart(index)}
        >
            Remover
          </Button>
      </CardContent>
    </Card>
  )
}