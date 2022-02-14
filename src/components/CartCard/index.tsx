import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import IconButton from '@mui/material/IconButton';

export const CartCard = ({ title, price, amount }: any) => {
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
        <Typography sx={{ fontSize: 20}}>
          {`${price} $`}
        </Typography>
        <Typography sx={{ fontSize: 20 }}>
          {`x${amount}`}
        </Typography>
        <div>
        <IconButton aria-label="adde">
        <AddCircleIcon color="primary"/>
        </IconButton>
        <IconButton aria-label="remove">
        <RemoveCircleIcon color="primary"/>
        </IconButton>
        </div>
      </CardContent>
    </Card>
  )
}