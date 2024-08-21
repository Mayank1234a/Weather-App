import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css";

export default function InfoBox( {info} ) {
    const INIT_URL = "https://images.unsplash.com/photo-1723474549831-0d70d6c5f2b5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL = "https://media.istockphoto.com/id/813720840/photo/summer-heat-wave-in-the-city.webp?b=1&s=612x612&w=0&k=20&c=WoRtc78gED_uzRG-aGmdUAAdCrM7XI64gYKdqBS1jXk=";
    const COLD_URL= "https://images.unsplash.com/photo-1477468572316-36979010099d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?b=1&s=612x612&w=0&k=20&c=NqRbz72ha40NZ0TiMzc4cLE2T0frsRsf-AlSOOLgwZ8=";
  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
            <CardMedia
                component="img"
                height="140"
                image={info.humidity > 70 ? RAIN_URL : info.temp > 20 ? HOT_URL : COLD_URL}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city} {info.humidity > 70 ? <ThunderstormIcon/> : info.temp > 20 ? <WbSunnyIcon/> : <AcUnitIcon/>}
                </Typography>
                <Typography variant="body2" color="text.secondary" component={"span"}>
                <div>Temperature : {info.temp}&deg;C</div>
                <div>Humidity : {info.humidity}</div>
                <div>Min Temp : {info.tempMin}</div>
                <div>Max Temp : {info.tempMax}</div>
                <div>The Weather can be discribed as <i>{info.weather}</i> & Feels Likes : {info.feelsLikes}&deg;C</div>
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
