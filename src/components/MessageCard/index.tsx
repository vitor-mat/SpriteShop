import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export const MessageCard = ({ author, message }: any) => {
  return (
    <Card 
      variant="outlined"
      sx={{
        width: "100%",
        minHeight: 70,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
       }}
    >
      <CardContent
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
         }}
      >
        <Typography sx={{ fontSize: 16, fontWeight: 700}}>
          {author}
        </Typography>
        <Typography sx={{ fontSize: 24, fontWeight: 300}}>
          {message}
        </Typography>
      </CardContent>
    </Card>
  )
}