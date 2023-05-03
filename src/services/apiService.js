const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

// Asinhronnostj
const apiUrl = "https://api.openweathermap.org/data/2.5";

export const defaultParams = {
  lat: "59.4370",
  lon: "24.7536",
  mode: "json",
  units: "metric",
};

// Тут мы генерируем(создаем) из обьекта в url string.  - Иными словами мы создаем правильный синтаксис для запроса и возвращаем строку.
export const gererateFetchUrl = (params, endPoint = "weather") => {
  const searchParams = new URLSearchParams({
    appid: apiKey,
    ...defaultParams,
    ...params,
  });
  return `${apiUrl}/${endPoint}?${searchParams}`;
};

export const getCurrentWeather = async (params) => {
  const link = gererateFetchUrl(params);

  //fetch - это функция JS, котоая делает запрос  на данный ему ссылку url. В нашем случае мы передаем fetch(link), с которого нужно стянуть данные.
  //fetch заходит на данный ему url/link и parse все что ему выдадаут. В нашем случае ему передают JSON с данными о погоде.
  //fetch собираем это все в response object. Response object - это тип обьекта с уже готовыми методами для обработки данных, но поскольку запрос и обработка занимает время,
  //то fetch оборачивает Response object в Promise object.
  //Потом мы await и работаем.
  const response = await fetch(link);
  if (!response.ok) {
    const errorMessage = `Current Weather Error ${response.status}:${response.statusText}`;
    throw errorMessage; //NB!!
  }
  return await response.json(); // make js object
};
// FORECAST
export const getForecastWeather = async (params) => {
  const url = gererateFetchUrl(params, "forecast");
  const response = await fetch(url);
  if (!response.ok) {
    const errorMessage = `Forecast Weather Error ${response.status}:${response.statusText}`;
    throw errorMessage;
  }
  return await response.json();
};
