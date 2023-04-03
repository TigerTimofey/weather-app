const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

// Asinhronnostj
const apiUrl = "https://api.openweathermap.org/data/2.5";
export const defaultParams = {
  lat: "59.4370",
  lon: "24.7536",
  mode: "json",
  units: "standard",
};

export const getCurrentWeather = async (params) => {
  const searchParams = new URLSearchParams({
    appid: apiKey,
    ...(params || defaultParams),
  });
  const response = await fetch(`${apiUrl}/weather?${searchParams}`);

  return await response.json(); // make js object
};
