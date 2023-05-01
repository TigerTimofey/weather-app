import { useState } from "react";

// function StandartComponent ({props}) {
function StandartComponent({ firstName, lastName }) {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  return (
    <div>
      <div>firstName: {firstName}</div>
      <div>LastName: {lastName}</div>
      <div>Count: {count}</div>
      <button onClick={() => setShow(!show)}>set show true</button>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      {show ? <ChildComponent count={count} setCount={setCount} /> : null}
    </div>
  );
}

StandartComponent.defaultProps = {
  lastName: "Last name here",
};

function ChildComponent({ count }) {
  return <div>ChildComponent: {count}</div>;
}
export default StandartComponent;
