import { getCurrentWeather, getForecastWeather } from "./services/apiService";
import { setCurrentweather, setForecastWeather } from "./services/stateService";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from "react-bootstrap/Container";
import Header from "./Header";
import Weather from "./Weather";
import Footer from "./Footer";
import Contact from "./Contact";
import "./App.scss";

function App() {
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();
  const currentWeather = useSelector((state) => state.currentWeather);
  const forecastWeather = useSelector((state) => state.forecastWeather);

  useEffect(() => {
    (async () => {
      try {
        const weather = await getCurrentWeather();
        const forecast = await getForecastWeather();

        dispatch(setCurrentweather(weather));
        dispatch(setForecastWeather(forecast));
      } catch (errorMessage) {
        setErrorMessage(errorMessage);
      }
    })();
  }, [dispatch]);

  const weatherProps = {
    currentWeather,
    forecastWeather,
    setCurrentweather,
    setForecastWeather,
    errorMessage,
  };
  return (
    <Container>
      <Header {...forecastWeather} />
      <Routes>
        <Route
          path="/weather-app/"
          element={<Weather {...weatherProps} />}
        ></Route>
        <Route
          path="/weather-app/forecast/:listIndex"
          element={<Weather {...weatherProps} />}
        ></Route>
        <Route path="/weather-app/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
