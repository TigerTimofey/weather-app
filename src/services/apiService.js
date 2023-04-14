const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

// Asinhronnostj
const apiUrl = "https://api.openweathermap.org/data/2.5";
export const defaultParams = {
  lat: "59.4370",
  lon: "24.7536",
  mode: "json",
  units: "metric",
};

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
  const response = await fetch(link);
  if (!response.ok) {
    const errorMessage = `Current Weather Error ${response.status}:${response.statusText}`;
    throw errorMessage; //NB!!
  }
  return await response.json(); // make js object
};
// export const linkGenerator = async (theData) => {
//   const linkParams = new URLSearchParams({
//     appid: apiKey,
//     mode: theData,
//     ...defaultParams,
//   });
//   const answer = await fetch(`${apiUrl}/weather?${linkParams}`);
//   return answer.url;
// };

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
