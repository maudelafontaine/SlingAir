// Select a flight : dropdown component

import React, { useState } from "react";
import styled from "styled-components";

const FlightSelect = () => {
  const [dropdown, setDropdown] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState("SA231");

  const handleClick = () => {
    if (dropdown === false) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };

  const handleClickFlight = (e) => {
    setSelectedFlight(e.currentTarget.innerText);
    handleClick();
  };

  return (
    <Wrapper>
      {/* <FlightSelection> */}
      <Title>Flight number:</Title>
      <Dropdown>
        <Btn onClick={handleClick}>Select a flight</Btn>
        <List>
          {dropdown === true && (
            <ListItems onClick={handleClickFlight}>{selectedFlight}</ListItems>
          )}
        </List>
      </Dropdown>
      {/* </FlightSelection> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 150px;
  width: 500px;
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
  background-color: pink;

  /* background-color: red;
  height: 60px;
  font-family: var(--font-heading);
  color: white;
  font-size: 32px; */
  /* padding-left: 20px;
  align-content: center;
  display: flex; */
`;

//
// const FlightSelection = styled.div`
//   /* padding-top: 15px;
//   padding-bottom: 15px;
//   padding-left: 30px; */
//   /* background-color: red; */
//   /* display: flex;
//   margin-bottom: 10px;
//   gap: 10px; */
// `;

const Title = styled.h2`
  font-size: 40px;
  color: white;
  margin-top: 20px;
  margin-left: 10px;
  /* text-align: left; */
`;

const Dropdown = styled.div`
  /* position: relative;
  display: inline-block; */
  margin-right: 5px;
  width: 50px;
`;

const Btn = styled.div`
  background-color: white;
  padding: 8px;
  border-radius: 2px;
  font-family: Helvetica;
  width: 150px;
  cursor: pointer;
`;

const List = styled.div`
  position: absolute;
`;

const ListItems = styled.div`
  background-color: #f1f1f1;
  position: absolute;
  width: 150px;
  padding: 8px;
  font-family: Helvetica;
  cursor: pointer;
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
