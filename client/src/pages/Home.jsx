import { useState } from "react";
//COMMENT: style below
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from 'leaflet';
import osm from "../uti/osm-providers";
import "./Home.css";
import "leaflet/dist/leaflet.css";


function HomePage() {
  const [center, setCenter] = useState({ lat: 24.453379, lng: -102.532609 });
  const [path, setPath] = useState({});
  const ZOOM_LEVEL = 5;

  const newIcon = new Icon({
    iconUrl: 
    'https://as2.ftcdn.net/v2/jpg/02/98/28/57/1000_F_298285715_ct4qtZOJH119A39TdMrbkLsfziVCX1Rz.jpg',
    iconSize: [20,20]
  });

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
            <Marker position={[center.lat, center.lng]} icon={newIcon}>
              <Popup>
                Welcome to Mexico!
              </Popup>
            </Marker>
          </MapContainer>
        </Box>
      </Box>
      <hr />
      <Box>Consider Map Instructions: This Web application was inspired by MEXICO PEACE INDEX 2022 in order to encourage a safer driving experience in highrisk zones.</Box>
    </Box>
  );
}

export default HomePage;
