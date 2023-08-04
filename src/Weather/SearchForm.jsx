import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { FormGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  getCurrentWeather,
  defaultParams,
  getForecastWeather,
} from "../services/apiService";
import {
  setCurrentweather,
  setForecastWeather,
} from "../services/stateService";

function SearchForm({ closeSidebar, setSelectedData, selectedData }) {
  const dispatch = useDispatch();

  const cities = [
    {
      name: "Tallinn",
      lat: "59.4370",
      lon: "24.7536",
    },
    {
      name: "Tartu",
      lat: "58.3780",
      lon: "26.7284",
    },
    {
      name: "Pärnu",
      lat: "58.3858",
      lon: "24.4965",
    },
    {
      name: "Narva",
      lat: "59.3799",
      lon: "28.1912",
    },
  ];
  const [selectedCityIndex, setSelectedCityIndex] = useState(0);

  const modes = ["xml", "html", "json"];
  const units = ["standard", "metric", "imperial"];
  const languages = [
    {
      label: "English",
      code: "en",
    },
    { label: "Finish", code: "fi" },
    { label: "Russian", code: "ru" },
    { lavel: "Vietnamese", code: "vi" },
  ];

  //Все обработчики события пишутся через ключевое слово handle.
  //Обработчик события принимает в себя обьект события.
  //Обьект события приходит из Браузера с полным отчетом о событии.
  //Главное свойство обьекта события - это target, в котором держится информация об элементе, с которым случилось событие
  //В нашем случае - это элемент <form></form>, который отправил данные на сервер, но мы поймали это событие и остановили его дейтсвие по умолчанию через метод preventDefault.
  // При отпарвке данных элемент form собирает все данные от пользователя и групирует их по названию.
  //Реакт берет это все и в ждобном виде через обьет предоставляет всю информацию, которую пользователь вбил в form.
  const handleSumbit = async (event) => {
    event.preventDefault(); // stop Data move when is clicked
    const params = {
      lat: event.target.latitude.value,
      lon: event.target.longitude.value,
      mode: event.target.mode.value,
      units: event.target.unit.value,
      lang: event.target.language.value,
    };

    const forecastWeather = await getForecastWeather(params);
    const currentWeather = await getCurrentWeather(params);
    dispatch(setCurrentweather(currentWeather));
    dispatch(setForecastWeather(forecastWeather));
    setSelectedData(params);
    closeSidebar();
  };
  const defaultValue = selectedData || defaultParams;

  return (
    <Form onSubmit={handleSumbit}>
      <FormGroup className="mb-3">
        <Form.Label>Cities</Form.Label>
        <Form.Select
          aria-label="Default select example"
          name="city"
          onChange={(event) => setSelectedCityIndex(event.target.value)}
        >
          {cities.map(({ name }, index) => (
            <option value={index} key={name}>
              {name}
            </option>
          ))}
        </Form.Select>
      </FormGroup>

      <Form.Group className="mb-3">
        <Form.Label>Latitude</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter latitude"
          name="latitude"
          value={cities[selectedCityIndex]?.lat}
          readOnly
        />
        <Form.Text className="text-muted">Example: 59.4370</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Longitude </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter longitude"
          name="longitude"
          value={cities[selectedCityIndex]?.lon}
          readOnly
        />
        <Form.Text className="text-muted">Example: 24.7536</Form.Text>
      </Form.Group>

      <Row>
        <Col>
          <FormGroup className="mb-3">
            <Form.Label>Mode</Form.Label>
            {modes.map((mode) => (
              <Form.Check
                type="radio"
                label={mode}
                key={mode}
                name="mode"
                value={mode}
                defaultChecked={mode === defaultValue.mode}
                disabled
              />
            ))}
            <Form.Text className="text-muted">Data type</Form.Text>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup className="mb-3">
            <Form.Label>Units</Form.Label>
            {units.map((unit) => (
              <Form.Check
                type="radio"
                label={unit}
                key={unit}
                name="unit"
                value={unit}
                defaultChecked={unit === defaultValue.units}
              />
            ))}
            <Form.Text className="text-muted">Measurement type</Form.Text>
          </FormGroup>
        </Col>
      </Row>

      <FormGroup className="mb-3">
        <Form.Label>Languages</Form.Label>
        <Form.Select
          aria-label="Default select example"
          name="language"
          defaultValue={defaultValue.lang}
        >
          {languages.map((lang) => (
            <option value={lang.code} key={lang.code}>
              {lang.label}
            </option>
          ))}
        </Form.Select>
      </FormGroup>

      <div className="d-grid">
        <Button variant="success" type="submit">
          {" "}
          Search{" "}
        </Button>{" "}
      </div>
    </Form>
  );
}
export default SearchForm;
