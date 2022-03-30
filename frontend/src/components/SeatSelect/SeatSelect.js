// Combines the flight selection (dropdown), seats selection (plane) and form (user personnal info)

import React from "react";
import styled from "styled-components";
import FlightSelect from "./FlightSelect";
import Plane from "./Plane";

const SeatSelect = ({ setReservationDetails, reservation }) => {
  const [flight, setFlight] = React.useState("");

  return (
    <Wrapper>
      <FlightSelect flight={flight} setFlight={setFlight} />
      <Container>
        <Plane
          setReservationDetails={setReservationDetails}
          flight={flight}
          reservation={reservation}
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
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default SeatSelect;
