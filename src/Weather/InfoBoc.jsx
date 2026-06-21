import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function InfoBox({data}) {
     const Img="https://images.unsplash.com/photo-1601297183305-6df142704ea2?auto=format&fit=crop&w=500&q=60";
     const HotImg="https://images.unsplash.com/photo-1561484930-998b6a7b22e8?auto=format&fit=crop&w=500&q=60";
     const ColdImg="https://images.unsplash.com/photo-1418985991508-e47386d96a71?auto=format&fit=crop&w=500&q=60";
     const RainyImg="https://images.unsplash.com/photo-1438449805896-28a666819a20?auto=format&fit=crop&w=500&q=60";

     let getImage = () => {
          let desc = data.description ? data.description.toLowerCase() : "";
          if (desc.includes("rain") || desc.includes("drizzle") || desc.includes("thunderstorm")) {
               return RainyImg;
          } else if (data.temp > 30) {
               return HotImg;
          } else if (data.temp < 15) {
               return ColdImg;
          } else {
               return Img;
          }
     };

  return (
    <div>
      <h3>Info Box</h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={getImage()}
            title={data.description}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.city}, {data.country}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Temperature: {data.temp}°C
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Description: {data.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}