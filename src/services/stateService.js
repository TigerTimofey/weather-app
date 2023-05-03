import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  showSideBar: false,
  forecastDateTimeSelect: null,
  currentWeather: null,
  forecastWeather: null,
};

// В Редукс - createAction это изменения состояний. createAction создает функцию, которая может менять состояния и которая передает обьект с  двумя свойствами:
//Первое - этo type, где написано название action
//Второе - это payload где новое состояние
// action это всеголишь Триггер, и это триггер reducer
export const setShowSideBar = createAction("setShowSideBar");
export const setForecastDateTimeSelect = createAction(
  "setForecastDateTimeSelect"
);
export const setCurrentweather = createAction("setCurrentweather");
export const setForecastWeather = createAction("setForecastWeather");

//reducer  по своей сути является хранилищем функции, которая выполняется при запуске action.
//У каждого action должнен быть свой reducer, в котором мы опишем изменение состояния.
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

//store - это хранилище всего состояния Редукс и он следит за нашим Реактом и работаем вместе с Реакт-Редукс
export const store = configureStore({ reducer });
