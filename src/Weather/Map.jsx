import React from "react";
import { GoogleMap, useJsApiLoader, InfoWindow } from "@react-google-maps/api";
import Badge from "react-bootstrap/Badge";
import { useSelector } from "react-redux";

const containerStyle = {
  width: "100%",
  height: "400px",
};

function Map({
  name,
  defaultTab,
  selectedTab,
  currentWeather,
  forecastWeather,
}) {
  const forecastDateTimeSelect = useSelector(
    (state) => state.forecastDateTimeSelect
  );
  const mapProps =
    selectedTab === defaultTab
      ? currentWeather
      : {
          name: forecastWeather?.city.name,
          main: forecastDateTimeSelect?.main || forecastWeather?.list[0].main,
          coord: forecastWeather?.city.coord,
          weather: forecastDateTimeSelect?.weather,
        };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  });

  return isLoaded && mapProps?.coord && mapProps?.weather ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{
        lat: mapProps?.coord.lat,
        lng: mapProps?.coord.lon,
      }}
      zoom={10}
    >
      <InfoWindow
        position={{
          lat: mapProps?.coord.lat,
          lng: mapProps?.coord.lon,
        }}
      >
        <Badge bg="light">
          <div className="text-center m-2 text-black">
            <h6>{`${name} `}</h6>
            <h4>{`${Math.round(mapProps?.main?.temp)} °C `}</h4>
            <h6>{mapProps?.weather[0]?.description.toUpperCase()}</h6>
          </div>
        </Badge>
      </InfoWindow>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default Map;
