import Header from "./Header";
import Weather from "./Weather";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import { getCurrentWeather, getForecastWeather } from "./services/apiService";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentweather, setForecastWeather } from "./services/stateService";

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

  console.log("current", currentWeather);
  console.log("forecast", forecastWeather);

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
