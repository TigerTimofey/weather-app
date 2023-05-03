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

// Компоненты в Реакт называются всегда с большой буквы? поскольку их проще индентифицировать в JSX и отличить от HTML.
// Компонент всегда возвращает только 1 заглавный элемент элемент(<></>).

// jsx - это новый синтаксис от Реакта, для боее удобного написания JS c HTML.
//
function App() {
  //useState - это Реакт ХООК, а все ХООКи могут воздействовать на отрисовку компонента. Все хуки через use, а состояния через set.
  //useState - это состояние компонента, простыми словами - это переменная, которая меняется. Включает переменную и функцию.
  //useState возвращает массив(ARRAY) из двух элементов:
  //Первый - изначальное состовяние которое мы передали в useState функцию, и это может быть люой тип данных.
  //Второй - это функция меняющая первый элемент.
  //В итоге при запуске изменения состояния наш компонент заново запускается/ отрисовывается уже с новым значением состояния.
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();
  const currentWeather = useSelector((state) => state.currentWeather);
  const forecastWeather = useSelector((state) => state.forecastWeather);

  //useEffect - это Реакт ХООК, который может контролировать отрисовку нашего компонента.
  //useEffect запускает функцию, которую мы ему передали после того как весь компонент закончил свою отрисовку.
  //Все измнения состояния useEffect запоминает пока не закончится его действие(переданная функция). После этого сколько бы изменений состояний небыло бы - отрсовки будет только одна!

  //Мы можем контролировать useEffect зависимосятми и это второй аргемент передаваемый useEffectу в ввиде массива.
  // Если мы передим пустой массив, то useEffect запуститься только 1 раз при первой отрисовки/ при mounte.
  //При передаче переменный в зависимости useEffect следит за ними, и если кто- то из них изменится, то useEffect запуститься заново.
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
