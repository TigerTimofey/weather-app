import Form from "react-bootstrap/Form";
import moment from "moment";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { setForecastDateTimeSelect } from "../services/stateService";
import { useDispatch } from "react-redux";
import { FORECAST_DATE_FORMAT } from "../constants";

function ForecastSelect({ list }) {
  //useParams это Реакт-раутер-дом ХООК, который следит за парамаетрами переденными в url.
  //В раутере мы назначили параметр через ":". Все что мы передадим в url вместо названия этого параметра, Реакт-раутер-дом подставит это значениев обьект, который useParams сможет прочитать
  //При изменнии этого параметра useParams заново отрисует компонент.

  const { listIndex } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    list?.length &&
      dispatch(setForecastDateTimeSelect(list?.[parseInt(listIndex) || 0]));
  }, [list, listIndex, dispatch]);

  const handleChange = (event) => {
    const index = event.target.value;
    dispatch(setForecastDateTimeSelect(list[index]));
  };

  return (
    <>
      <Form.Group className="mb-3 text-center">
        <h5>
          <Form.Label>Date & Time</Form.Label>
        </h5>
        <Form.Select
          aria-label="Default select example"
          onChange={handleChange}
          value={listIndex}
        >
          {list?.map(({ dt }, index) => (
            <option value={index} active={listIndex} key={index}>
              {moment.unix(dt).format(FORECAST_DATE_FORMAT)}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
    </>
  );
}
export default ForecastSelect;
