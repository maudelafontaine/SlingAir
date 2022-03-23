import React from "react";
import styled from "styled-components";

import tombstone from "../assets/tombstone.png";

const Confirmation = () => {
  return (
    <Wrapper>
      <Text>Your flight is confirmed !</Text>
      <ResNum>Reservation #: </ResNum>
      <FlightNum>Flight #:</FlightNum>
      <SeatNum>Seat #:</SeatNum>
      <Name>Name:</Name>
      <Email>Email:</Email>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Text = styled.h1``;

const ResNum = styled.h2``;

const FlightNum = styled.h2``;

const SeatNum = styled.h2``;

const Name = styled.h2``;

const Email = styled.h2``;

export default Confirmation;
