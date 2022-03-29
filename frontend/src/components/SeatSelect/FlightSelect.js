// Select a flight : dropdown component

import React, { useState } from "react";
import styled from "styled-components";

const FlightSelect = ({ flight, setFlight }) => {
  // const [flight, setFlight] = useState("");

  const handleClick = () => {
    setFlight("SA231");
    console.log("clicking works!");
    console.log(flight);
  };

  return (
    <Wrapper>
      <Label htmlFor="flights">Flight number : </Label>
      <Selection onClick={handleClick}>
        <option value="placeholder">Select a flight </option>
        <option value="SA231">SA231</option>
      </Selection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 150px;
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  margin-right: 20px;
`;

const Selection = styled.select`
  width: 180px;
  height: 40px;
  border-radius: 2px;
  font-size: 20px;
`;

export default FlightSelect;

// Ressource :
// https://stackoverflow.com/questions/45167565/does-react-js-support-html5-datalist

// https://www.w3schools.com/html/tryit.asp?filename=tryhtml_elem_select

// const [flights, setFlights] = React.useState({});
// const [flightNum, setFlightNum] = React.useState("");

// React.useEffect(() => {
//   fetch("/flights")
//     .then((res) => res.json())
//     .then((data) => {
//       setFlights(data.data);
//     });
// }, []);

// const handleChange = (e) => {
//   setFlightNum(e.target.value);
// };

{
  /* <Select
  defaultValue={"default"}
  name="Select a flight"
  onChange={handleChange}
>
  <option value="default" disabled>
    {" "}
    Select a flight
  </option>
  {Object.keys(flights).length > 0 &&
    flights.map((flight) => (
      <option key={flight.id} value={flight.id}>
        {flight.id}
      </option>
    ))}
</Select> */
}
