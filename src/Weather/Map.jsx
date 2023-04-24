import React from "react";
import { GoogleMap, useJsApiLoader, InfoWindow } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

function Map({ coord, main, weather }) {
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
        <>
          {`${main?.temp} `}
          <br />
          {weather[0]?.description}
        </>
      </InfoWindow>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default Map;
