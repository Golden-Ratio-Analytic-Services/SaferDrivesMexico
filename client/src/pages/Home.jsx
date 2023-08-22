import { useState } from "react";
//COMMENT: style below
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import osm from "../uti/osm-providers";
import PlaceIcon from '@mui/icons-material/Place';
import './Home.css';
import 'leaflet/dist/leaflet.css';

function HomePage() {
  const [center, setCenter] = useState({ lat: 23.453379, lng: -102.532609 });
  const ZOOM_LEVEL = 5;

 

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      start: data.get("start"),
      end: data.get("end"),
    });
  };

  return (
    <Box className="home" width="90%" m="30px auto">
      <Box display="flex" flexWrap="wrap" columnGap="40px">
        <Box flex="1 1 30%" mb="10px" widthMax="100px">
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="start"
              label="Choose Start"
              name="start"
              autoComplete="start"
              autoFocus
              color="success"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="end"
              label="Choose Destination"
              type="end"
              id="end"
              autoComplete="current-end"
              color="success"
            />

            {
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="success"
              >
               Submit
              </Button>
            }
          </Box>
        </Box>

        <Box flex="1 1 50%" mb="40px" minHeight="250px">
          <MapContainer
            center={center}
            zoom={ZOOM_LEVEL}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution={osm.maptiler.attribution}
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={center} >
              <Popup>
                Welcome To Mexico!
              </Popup>
            </Marker>
          </MapContainer>
        </Box>

      </Box>
      <Box>
        Generic Test here
      </Box>
    </Box>
  );
}

export default HomePage;
