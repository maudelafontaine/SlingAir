// Select a flight : dropdown component

import React from "react";
import styled from "styled-components";

const FlightSelect = () => {
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

  return (
    <Wrapper>
      <Text>Flight number : </Text>
      {/* <Select
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
      </Select> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 150px;
  /* background-color: red;
  height: 60px;
  font-family: var(--font-heading);
  color: white;
  font-size: 32px;
  padding-left: 20px;
  align-content: center;
  display: flex; */
`;

const Text = styled.h1`
  font-size: 40px;
  color: white;
  margin-top: 20px;
`;

// const Select = styled.select`
//   width: 150px;
//   height: 30px;
//   text-align: center;
//   margin-left: 20px;
//   margin-top: 15px;
// `;

// const Dropdown = styled.input``;

export default FlightSelect;

// Ressource :
// https://stackoverflow.com/questions/45167565/does-react-js-support-html5-datalist
