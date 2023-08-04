import Form from "react-bootstrap/Form";
import moment from "moment";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { setForecastDateTimeSelect } from "../services/stateService";
import { useDispatch } from "react-redux";
import { FORECAST_DATE_FORMAT } from "../constants";

function ForecastSelect({ list }) {
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
        <Form.Label>
          <h5>Date & Time</h5>
        </Form.Label>

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
