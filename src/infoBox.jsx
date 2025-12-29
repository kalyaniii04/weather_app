import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import AcUnitIcon from "@mui/icons-material/AcUnit";

import "./infoBox.css";

export default function InfoBox({ info }) {
  const WINT_URL =
    "https://images.unsplash.com/photo-1457269449834-928af64c684d";
  const SUMM_URL =
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1519692933481-e162a57d6721";

  const imageUrl =
    info.humidity > 80
      ? RAIN_URL
      : info.temp > 15
      ? SUMM_URL
      : WINT_URL;

  return (
    <Card className="InfoBox">
      <CardActionArea>
        <CardMedia component="img" height="200" image={imageUrl} alt="weather" />

        <CardContent className="content">
          <Typography className="city" variant="h5">
            {info.city}&nbsp;
            {info.humidity > 80 ? (
              <ThunderstormIcon />
            ) : info.temp > 15 ? (
              <BeachAccessIcon />
            ) : (
              <AcUnitIcon />
            )}
          </Typography>

          <Typography className="info">
            The weather is <b>{info.weather}</b> and temperature is{" "}
            <b>{Math.round(info.temp)}°C</b>
          </Typography>

          <Divider className="divider" />

          <Box className="stats">
            <Typography className="info">
              <b>Feels Like:</b> {Math.round(info.feelsLike)}°C
            </Typography>

            <Typography className="info">
              <b>Humidity:</b> {info.humidity}%
            </Typography>

            <Typography className="info"><b>Minimum Temprature</b> = {Math.round(info.tempMin)}° </Typography>
            <Typography className="info"><b>Maximum  Temprature</b> = {Math.round(info.tempMax)}° </Typography>
            
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
