import Header from "./Header";
import Weather from "./Weather";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import {
  getCurrentWeather,
  getForecastWeather,
} from "./src/../services/apiService";
import { useState, useEffect } from "react";

function App() {
  const [currentWeather, setCurrentweather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const [forecastDateTimeSelect, setForecastDateTimeSelect] = useState(null);

  useEffect(() => {
    getCurrentWeather()
      .then((weather) => {
        setCurrentweather(weather);
      })
      .catch((errorMessage) => setErrorMessage(errorMessage));
    getForecastWeather()
      .then((forecast) => {
        setForecastWeather(forecast);
      })
      .catch((errorMessage) => setErrorMessage(errorMessage));
  }, []);
  console.log("current", currentWeather);
  console.log("forecast", forecastWeather);

  const weatherProps = {
    currentWeather,
    forecastWeather,
    setCurrentweather,
    setForecastWeather,
    errorMessage,
    setForecastDateTimeSelect,
    forecastDateTimeSelect,
  };

  return (
    <Container>
      <Header {...weatherProps} {...forecastWeather} />
      <Routes>
        <Route path="/" element={<Weather {...weatherProps} />}></Route>
        <Route
          path="/forecast/:listIndex"
          element={<Weather {...weatherProps} />}
        ></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
