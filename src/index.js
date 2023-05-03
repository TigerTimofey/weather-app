import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./services/stateService";
import App from "./App";

//Реакт состоит из двух главных пакетов. Это пеакт и реакт-дом.
// В данном случае берется document и тянется getElementById("root").Этот документ отправляется в реакт-ДОМ и создается проект.
// Реакт-дом это мост межу нашими компонентами и чистым HTML и js.
const root = ReactDOM.createRoot(document.getElementById("root"));

// роот.рендер отрисовывает весь наш прооект в виртуальный ДОМ.
root.render(
  // Provider - это вспомогательный компонент от Реакт-редукс для связывания Реакта с Редуксом. В него мы передаем наше облако состояния Редукс
  // BrowserRouter - это вспомогательный компонент Реакт-раутер-дом, который контролирует отрисовку компонентов в свявисимости от url.

  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
