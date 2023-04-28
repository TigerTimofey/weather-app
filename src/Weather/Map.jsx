import React from "react";
import { GoogleMap, useJsApiLoader, InfoWindow } from "@react-google-maps/api";
import Badge from "react-bootstrap/Badge";

const containerStyle = {
  width: "100%",
  height: "400px",
};

function Map({ coord, main, weather, name }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  });

  return isLoaded && coord && weather ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{
        lat: coord.lat,
        lng: coord.lon,
      }}
      zoom={10}
    >
      <InfoWindow
        position={{
          lat: coord.lat,
          lng: coord.lon,
        }}
      >
        <Badge bg="light">
          <div className="text-center m-2 text-black">
            <h6>{`${name} `}</h6>
            <h4>{`${Math.round(main?.temp)} °C `}</h4>
            <h6>{weather[0]?.description.toUpperCase()}</h6>
          </div>
        </Badge>
      </InfoWindow>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default Map;
