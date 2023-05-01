import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  showSideBar: false,
  forecastDateTimeSelect: null,
  currentWeather: null,
  forecastWeather: null,
};

export const setShowSideBar = createAction("setShowSideBar");
export const setForecastDateTimeSelect = createAction(
  "setForecastDateTimeSelect"
);
export const setCurrentweather = createAction("setCurrentweather");
export const setForecastWeather = createAction("setForecastWeather");

const reducer = createReducer(initialState, {
  [setShowSideBar]: (state, action) => {
    state.showSideBar = action.payload;
  },
  [setForecastDateTimeSelect]: (state, action) => {
    state.forecastDateTimeSelect = action.payload;
  },
  [setCurrentweather]: (state, action) => {
    state.currentWeather = action.payload;
  },
  [setForecastWeather]: (state, action) => {
    state.forecastWeather = action.payload;
  },
});

export const store = configureStore({ reducer });
