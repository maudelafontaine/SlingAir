// Combines the Plane and Form (user inputs)

import React from "react";
import styled from "styled-components";
import FlightSelect from "./FlightSelect";
import Plane from "./Plane";

const SeatSelect = ({ setReservationDetails, newFun }) => {
  const [flight, setFlight] = React.useState("");

  return (
    <Wrapper>
      <FlightSelect flight={flight} setFlight={setFlight} />
      <Container>
        <Plane
          setReservationDetails={setReservationDetails}
          flight={flight}
          newFun={newFun}
        />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* height: 2000px; */
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default SeatSelect;
